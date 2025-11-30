
// module.exports = ({ env }) => ({
//   // CLOUDINARY UPLOAD
//   upload: {
//     config: {
//       provider: "@strapi/provider-upload-cloudinary",
//       providerOptions: {
//         cloud_name: env("CLOUDINARY_NAME"),
//         api_key: env("CLOUDINARY_API_KEY"),
//         api_secret: env("CLOUDINARY_API_SECRET"),
//       },
//       actionOptions: {
//         upload: {},
//         delete: {},
//       },
//     },
//   },

//   // EMAIL (Nodemailer)
//   email: {
//     config: {
//       provider: "nodemailer",
//       providerOptions: {
//         host: "smtp.gmail.com",
//         port: 465,
//         secure: true,
//         auth: {
//           user: env("SMTP_USER"),
//           pass: env("SMTP_PASS"),
//         },
//       },
//       settings: {
//         defaultFrom: env("SMTP_USER"),
//         defaultReplyTo: env("SMTP_USER"),
//       },
//     },
//   },

//   // EMAIL DESIGNER
//   "email-designer": {
//     enabled: true,
//   },
// });

module.exports = ({ env }) => ({
  // CLOUDINARY UPLOAD
  upload: {
    config: {
      provider: "@strapi/provider-upload-cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_API_KEY"),
        api_secret: env("CLOUDINARY_API_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },

  // EMAIL (Brevo SMTP)
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp-relay.brevo.com"),
        port: env("SMTP_PORT"),
        secure: false, // Brevo uses STARTTLS on 587
        auth: {
          user: env("SMTP_USER"),
          pass: env("SMTP_PASS"),
        },
      },
      settings: {
        defaultFrom: env("DEFAULT_EMAIL"),
        defaultReplyTo: env("DEFAULT_EMAIL"),
      },
    },
  },

  // EMAIL DESIGNER
  "email-designer": {
    enabled: true,
  },
});
