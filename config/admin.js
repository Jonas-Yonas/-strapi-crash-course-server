module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2ca73bf7adca835ad8f0fedeff8e75bc'),
  },
});
