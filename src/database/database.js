import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
  'sc-main',
  'ana',
  process.env.POSTGRES_PASSWORD,
  {
    host: `sc-${process.env.NODE_ENV}-postgres`,
    dialect: 'postgres',
    pool: { max: 5, min: 0, require: 30000, idle: 10000 },
    logging: false
  }
)
