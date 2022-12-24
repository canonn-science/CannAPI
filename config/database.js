module.exports = ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'mysql'),
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'cannapi_dev'),
      user: env('DATABASE_USERNAME', 'cannapi_admin'),
      password: env('DATABASE_PASSWORD', 'cannapi_password'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    debug: env.bool('DATABASE_DEBUG', false),
    pool: {
      min: env.int('DATABASE_POOL_MIN', 0),
      max: env.int('DATABASE_POOL_MAX', 50),
      acquireTimeoutMillis: env.int('DATABASE_POOL_ACQUIRE_TIMEOUT_MILLIS', 60000),
      createTimeoutMillis: env.int('DATABASE_POOL_CREATE_TIMEOUT_MILLIS', 30000),
      destroyTimeoutMillis: env.int('DATABASE_POOL_DESTROY_TIMEOUT_MILLIS', 5000),
      idleTimeoutMillis: env.int('DATABASE_POOL_IDLE_TIMEOUT_MILLIS', 30000),
      reapIntervalMillis: env.int('DATABASE_POOL_REAP_INTERVAL_MILLIS', 1000),
      createRetryIntervalMillis: env.int('DATABASE_POOL_CREATE_RETRY_INTERVAL_MILLIS', 200),
    },
    acquireConnectionTimeout: env.int('DATABASE_TIMEOUT', 60000),
  },
  settings: {
    forceMigration: env.bool('DATABASE_FORCE_MIGRATION', true),
  }
});
