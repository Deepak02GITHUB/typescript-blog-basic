/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'strapi-backend-connect.onrender.com'],
  },
  // Increase static generation timeout to 120 seconds
  staticPageGenerationTimeout: 120,

  
};

module.exports = nextConfig;
