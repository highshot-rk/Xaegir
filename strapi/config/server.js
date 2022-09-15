module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 1337),
  // url: env('TRAEFIK_URL', 'xaegir.local'),
  app: {
    // TODO: change this
    keys: env.array('APP_KEYS', ['testKey1', 'testKey2']),
  },
});
