import Sequelize from 'sequelize'
// var Sequelize = require("sequelize")
export const sequelize = new Sequelize(
  'sc-main',
  'ana',
  process.env.POSTGRES_PASSWORD,
  {
    host: `sc-development-postgres-mqtt-authentication`,
    dialect: 'postgres',
    pool: { max: 5, min: 0, require: 30000, idle: 10000 },
    logging: false
  }
)
