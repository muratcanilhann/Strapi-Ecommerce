export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'), 
  port: env.int('PORT', 1337), 
  app: {
    keys: env.array('APP_KEYS'), 
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'), 
    },
  },
  database: {
    client: env('DATABASE_CLIENT', 'sqlite'), 
    connection: {
      filename: env('DATABASE_FILENAME', '.tmp/data.db'), 
    },
    useNullAsDefault: true, 
  },
  security: {
    apiTokenSalt: env('API_TOKEN_SALT'), 
    transferTokenSalt: env('TRANSFER_TOKEN_SALT'), 
  },
  jwt: {
    secret: env('JWT_SECRET'), 
  },
});
