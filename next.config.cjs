/** @type {import('next').NextConfig} */

// next.config.js

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
};

module.exports = nextConfig;
