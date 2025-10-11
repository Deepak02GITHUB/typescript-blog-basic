module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://typescript-blog-jet.vercel.app', // your frontend
        'http://localhost:3000',                  // local dev
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
