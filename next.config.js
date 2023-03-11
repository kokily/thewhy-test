/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  images: {
    domains: ['image.dnkdream.com', 's3.ap-northeast-2.amazonaws.com'],
  },
};

module.exports = nextConfig;
