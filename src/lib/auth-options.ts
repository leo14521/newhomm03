import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { AUTH_SECRET } from "@/lib/auth-secret";

const ADMIN_EMAIL = "admin@hommageclinic.com";
const ADMIN_DEFAULT_PASSWORD = "1234";

export const authOptions: NextAuthOptions = {
  // 여러 도메인/프록시 환경에서도 요청 Host를 신뢰해 인증 URL을 계산
  trustHost: true,
  // 운영 환경에서 http로 접속(내부 IP/로컬 등)하면 secure 쿠키가 저장되지 않아 로그인 후에도 세션이 유지되지 않을 수 있음.
  // 필요 시 환경변수로만 예외적으로 허용: NEXTAUTH_ALLOW_INSECURE_COOKIES=1
  useSecureCookies: process.env.NEXTAUTH_ALLOW_INSECURE_COOKIES === "1" ? false : process.env.NODE_ENV === "production",
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "이메일", type: "email" },
        password: { label: "비밀번호", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email?.trim().toLowerCase();
        const password = credentials?.password;
        if (!email || !password) return null;

        // 운영 안정성: 로그인 단계에서는 DB write를 하지 않음
        // (서버 환경에서 DB 권한/연결 이슈가 있으면 NextAuth "Server error"가 발생할 수 있음)
        if (email === ADMIN_EMAIL && password === ADMIN_DEFAULT_PASSWORD) {
          return {
            id: "admin-fixed",
            email: ADMIN_EMAIL,
            name: "Admin",
            role: "ADMIN",
          };
        }

        let user: { id: string; email: string; name: string | null; role: string; passwordHash: string } | null = null;
        try {
          const { prisma } = await import("@/lib/prisma");
          user = await prisma.user.findUnique({ where: { email } });
        } catch {
          throw new Error("AUTH_SERVER_ERROR");
        }
        if (!user) return null;

        const valid = await bcrypt.compare(password, user.passwordHash);
        if (!valid) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = (token.role as string) ?? "USER";
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: AUTH_SECRET,
};
