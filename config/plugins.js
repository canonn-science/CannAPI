module.exports = ({ env }) => ({
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
  'rest-cache': {
    enabled: env('REST_CACHE_ENABLED', false),
    config: {
      //
    }
  },
  redis: {
    enabled: env('REDIS_ENABLED', false),
    config: {
      //
    }
  },
  'config-sync': {
    enabled: env('CONFIG_SYNC_ENABLED', false),
    config: {
      //
    }
  },
});
