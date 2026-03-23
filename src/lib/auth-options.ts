import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

const ADMIN_EMAIL = "admin@hommageclinic.com";
const ADMIN_DEFAULT_PASSWORD = "1234";

export const authOptions: NextAuthOptions = {
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
          user = await prisma.user.findUnique({ where: { email } });
        } catch {
          return null;
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
  secret: process.env.NEXTAUTH_SECRET,
};
