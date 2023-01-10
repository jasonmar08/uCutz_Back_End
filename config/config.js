require('dotenv').config()

module.exports = {
  development: {
    database: process.env.LOCAL_DB_NAME,
    host: process.env.LOCAL_DB_HOST,
    dialect: 'postgres'
  },
  test: {
    database: process.env.LOCAL_DB_NAME,
    host: process.env.LOCAL_DB_HOST,
    dialect: 'postgres'
  },
  production: {
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    },
    ssl: true
  }
}
