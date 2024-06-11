/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";
// next.config.js

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  extendDefaultRuntimeCaching: true,
});

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: { subsets: ["Noto Sans KR", "latin-ext", "korean"] },
      },
    ],
  },
  images: {
    domains: ["source.unsplash.com", "/public/images/"],
  },
  swcMinify: true,
};

module.exports = withPWA(nextConfig);
