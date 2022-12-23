module.exports = ({ env }) => ({
  rest: {
    prefix: env('API_PREFIX', '/v1'),
    defaultLimit: env('API_DEFAULT_LIMIT', 25),
    maxLimit: env('API_MAX_LIMIT', 100),
    withCount: env('API_WITH_COUNT', true),
  },
});
