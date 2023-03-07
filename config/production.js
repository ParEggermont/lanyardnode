module.exports = {
  port: 9000,
  log: {
    level: 'info',
    disabled: false,
  },
  cors: {
    origins: ['https://pareggermont.github.io'],
    maxAge: 3 * 60 * 60,
  },
  database: {
    client: 'mysql2',
    host: 'localhost',
    port: 3306,
    name: 'qr_codes',
  },
};