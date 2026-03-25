import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { AUTH_SECRET } from "@/lib/auth-secret";

export async function middleware(request: NextRequest) {
  // 운영 환경에서 http로 접근 시 NextAuth secure 쿠키 미저장 → 로그인 불가처럼 보일 수 있어 https로 유도
  if (process.env.NODE_ENV === "production") {
    const forwardedProto = request.headers.get("x-forwarded-proto");
    if (forwardedProto && forwardedProto !== "https") {
      const url = request.nextUrl.clone();
      url.protocol = "https:";
      return NextResponse.redirect(url);
    }
  }

  if (!request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const token = await getToken({
    req: request,
    secret: AUTH_SECRET,
  });

  if (!token || token.role !== "ADMIN") {
    const url = new URL("/login", request.url);
    url.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
