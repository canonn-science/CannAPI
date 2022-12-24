module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::compression',
    config: {
      threshold: env('COMPRESSION_THRESHOLD', '1kb'),
      br: env.bool('COMPRESSION_BR', false),
      gzip: env.bool('COMPRESSION_GZIP', true),
      deflate: env.bool('COMPRESSION_DEFLATE', false),
      defaultEncoding: env('COMPRESSION_DEFAULT_ENCODING', 'identity'),
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: env('CORS_ORIGIN', '*'),
      maxAge: env.int('CORS_MAX_AGE', 31536000),
      credentials: env.bool('CORS_CREDENTIALS', true),
      methods: env.array('CORS_METHODS', ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS']),
      headers: env.array('CORS_HEADERS'),
      keepHeaderOnError: env.bool('CORS_KEEP_HEADER_ON_ERROR', false),
    },
  },
  {
    name: 'strapi::poweredBy',
    config: {
      poweredBy: env('X_POWERED_BY', 'Canonn Science <canonn.science>'),
    },
  },
  'strapi::logger',
  'strapi::responseTime',
  {
    name: 'strapi::query',
    config: {
      strictNullHandling: env.bool('QUERY_STRICT_NULL_HANDLING', true),
      arrayLimit: env.int('QUERY_ARRAY_LIMIT', 100),
      depth: env.int('QUERY_DEPTH', 20),
    },
  },
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
