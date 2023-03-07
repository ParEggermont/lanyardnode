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
    username: 'LanyardUser',
    password: 'c86347e7-9d19-4879-880c-28d4dbe6a7c1',
    options:{
      encrypt: true,
    }
  },
};