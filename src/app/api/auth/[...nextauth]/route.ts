import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth-options";

// 배포 환경에서 NEXTAUTH_URL이 localhost로 잘못 주입된 경우 강제 보정
if (process.env.NODE_ENV === "production") {
  process.env.NEXTAUTH_URL = "https://hommageclinic.com";
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
