const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 9018,
  jwtSecret: process.env.JWT_SECRET || 'YOUR_secret_key',
};

export default config;
