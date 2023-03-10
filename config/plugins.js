module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'no-reply@canonn.tech',
        defaultReplyTo: 'no-reply@canonn.tech',
      }
    }
  },
  sentry: {
    enabled: env('SENTRY_ENABLED', false),
    config: {
      dsn: env('SENTRY_DSN'),
      init: {
        environment: env('SENTRY_ENVIRONMENT', 'local'),
        attachStacktrace: env('SENTRY_ATTACH_STACKTRACE', true),
        serverName: env('PUBLIC_URL'),
      }
    }
  },
  redis: {
    enabled: env('REDIS_ENABLED', true),
    config: {
      connections: {
        default: {
          host: env('REDIS_DEFAULT_HOST', '127.0.0.1'),
          port: env('REDIS_DEFAULT_PORT', 6379),
          db: env('REDIS_DEFAULT_DB', 0),
        }
      },
      settings: {
        debug: env('REDIS_DEBUG', false),
      }
    }
  },
  'rest-cache': {
    enabled: env('REST_CACHE_ENABLED', true),
    config: {
      provider: {
        name: 'redis',
        options: {
          max: 32767,
          connection: "default",
        }
      },
      strategy: {
        debug: false,
        enableEtag: true,
        enableXCacheHeaders: true,
        enableAdminCTBMiddleware: true,
        resetOnStartup: false,
        clearRelatedCache: true,
        keysPrefix: 'rest-cache::',
        contentTypes: [
          {
            contentType: 'api::stellar-body.stellar-body',
            maxAge: 14400 * 60,
          },
          {
            contentType: 'api::stellar-region.stellar-region',
            maxAge: 14400 * 60,
          },
          {
            contentType: 'api::stellar-ring.stellar-ring',
            maxAge: 14400 * 60,
          },
          {
            contentType: 'api::stellar-system.stellar-system',
            maxAge: 14400 * 60,
          },
        ]
      }
    }
  },
  'config-sync': {
    enabled: env('CONFIG_SYNC_ENABLED', false),
    config: {
      //
    }
  },
});
