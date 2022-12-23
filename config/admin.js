module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    options: {
      expiresIn: env('ADMIN_JWT_EXPIRES_IN', '30d'),
    }
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  url: env('ADMIN_URL', 'http://localhost:1337/admin'),
});
