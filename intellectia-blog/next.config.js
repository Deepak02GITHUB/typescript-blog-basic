/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Local Strapi
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },

      // Render-hosted Strapi
      {
        protocol: "https",
        hostname: "strapi-backend-connect.onrender.com",
        pathname: "/uploads/**",
      },

      // ✅ Cloudinary Support
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },

  staticPageGenerationTimeout: 120,
};

module.exports = nextConfig;
