module.exports = {
  port: 9000,
  log: {
    level: 'silly',
    disabled: false,
  },
  cors: {
    origins: ['http://127.0.0.1:5500'],
    maxAge: 3 * 60 * 60,
  },
  database: {
    client: 'mssql',
    host: 'lanyard.database.windows.net',
    name: 'lanyard',
    port: 1433,
    options:{
      encrypt: true,
    }
  },
};