import { sequelize } from '../database/database'

import JWT from '../model/JWT'

async function initDB() {
  try {
    // This creates the table, dropping it first if it already existed
    
    await sequelize.sync({ force: true })
  } catch (error) {
    console.log('Error Init', error)
  }
}
export const syncModel = async function () {
  try {

    console.log('Entra aca a hacer SYNCMODEL :>> ');
    

    //  await initDB()
    // else ()
    // This creates the table if it doesn't exist (and does nothing if it already exists)
    
    console.log('sale de aca| :>> ');
    await sequelize.sync()
  } catch (err) {
    console.log('Error Sync', err.message)
  }
}
