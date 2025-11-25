/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "strapi-backend-connect.onrender.com",
        port: "",
        pathname: "/uploads/**",
      }
    ],
  },
};

module.exports = nextConfig;
