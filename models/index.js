'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.json')[env]
const db = {}

// let sequelize
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config)
// } else {
//   sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   )
// }

const DB_NAME = 'd7bjk20ulgdf6q'
const DB_HOST = 'ec2-44-205-41-76.compute-1.amazonaws.com'
const DB_USERNAME = 'vewcaoddwulpvy'
const DB_PASS =
  '2bb9f1d0afd24b430c619296c6f0caa914d1bd9be7aafa4a04673ef77d8f2ad3'
const DB_PORT = 5432

let sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASS, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // <<<<<<< YOU NEED THIS
    }
  },
  host: DB_HOST,
  port: DB_PORT,
  // logging: false,
  ssl: true
})

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    )
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
