export default () => ({
  host: '0.0.0.0', 
  port: 1337, 
  app: {
    keys: [
      'hg6oI/XBm86SzyP4cE8O3g==',
      'll1OxUQTwx5jA4SsCbXtkg==',
      'mmX6cHf/9bBumHgCT86C7w==',
      'Y/vL7hohOlWCgB1Zh2nGiw==',
    ],
  },
  admin: {
    auth: {
      secret: 'nEsChj5GTkDrFbw0eQrcvQ==', 
    },
  },
  database: {
    client: 'sqlite', 
    connection: {
      filename: '.tmp/data.db',
    },
    useNullAsDefault: true, 
  },
  security: {
    apiTokenSalt: 'cgHQGFOaTqanLUo6JxJ9Xw==', 
    transferTokenSalt: 'mHoKBtQxXSNIfffgnDFoSQ==',
  },
  jwt: {
    secret: 'HULH9+DsOm+EROA+JXmmow==', 
  },
});
