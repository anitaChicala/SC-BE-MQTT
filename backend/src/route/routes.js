import express, { json } from 'express' // Body parser is now included on express


// const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const jwt = require('./jwt')



module.exports = (app) => {
  app.use(morgan('dev'))
  app.use(json())
  app.use(helmet({
    crossOriginResourcePolicy: false
  }))
 
  app.use('/jwt', jwt)

  
  
  app.disable('etag') // to avoid the 304 code instead of the actual code I want to send
}
