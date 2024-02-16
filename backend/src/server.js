var express = require('express') //llamamos a Express
const cors = require('cors')
// var cron = require('node-cron');



const corsOptions = {
  "origin": "*",
  "methods": "OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}
const app = express()
app.use(cors(corsOptions))
const pgsql = require('./lib/pgsql')



// require routes
require('./route/routes')(app)


var port = 3001  // establecemos nuestro puerto

pgsql.syncModel().then(() => {
  app.listen(port, () =>
  console.log(`Listening on ${port}...  on ENV ${process.env.NODE_ENV}`)
  )
})