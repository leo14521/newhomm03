/** @type {import('next').NextConfig} */
const nextConfig = {
  // 브라우저 기본 요청 /favicon.ico → app/icon.svg 로 연결 (404 방지)
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/icon.svg" }];
  },
  async redirects() {
    return [
      { source: "/signature/skin-booster", destination: "/signature/boosting", permanent: true },
      { source: "/signature/collagen-booster", destination: "/signature/boosting", permanent: true },
    ];
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
