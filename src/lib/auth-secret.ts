// NextAuth와 middleware가 동일한 secret을 사용해야 /admin 보호 라우트에서 세션이 유지됩니다.
export const AUTH_SECRET = process.env.NEXTAUTH_SECRET || "hommageclinic-fallback-secret-change-this";
