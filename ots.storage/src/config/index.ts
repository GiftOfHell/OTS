export default () => ({
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    sync: process.env.DB_SYNC === 'true',
  },
  logger: {
    debug: !!process.env.DEBUG,
  },
  app: {
    uri: process.env.APP_URI,
    port: process.env.PORT || 8080,
    superUsers: JSON.parse(process.env.APP_SUPER_USERS),
    isDev: process.env.NODE_ENV === 'development',
    client: {
      uri: process.env.APP_CLIENT_HOST,
    },
  },
  auth: {
    jwt: {
      secret: process.env.JWT_SECRET_KEY,
      exp: parseInt(process.env.JWT_EXP_TIME),
      tokenName: 'jwt_token',
    },
  },
});
