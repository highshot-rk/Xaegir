module.exports = ({ env }) => ({
  auth: {
    //TODO: change this
    secret: env('ADMIN_JWT_SECRET', 'a0a63d3a5e9bf9faaedca4cffb5f1f02'),
  },
});
