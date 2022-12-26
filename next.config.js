/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["loremflickr.com"],
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:4000/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
