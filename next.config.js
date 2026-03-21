/** @type {import('next').NextConfig} */
const nextConfig = {
  // 브라우저 기본 요청 /favicon.ico → app/icon.svg 로 연결 (404 방지)
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/icon.svg" }];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
