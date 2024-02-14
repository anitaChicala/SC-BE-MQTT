var express = require('express') //llamamos a Express
const cors = require('cors')
var cron = require('node-cron');



const corsOptions = {
  "origin": "*",
  "methods": "OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}
const app = express()
app.use(cors(corsOptions))



// require routes
require('./lib/routes')(app)


var port = process.env.PORT || 8080  // establecemos nuestro puerto


// Start server
const port = 3001


app.listen(port, () =>
  console.log(`Listening on ${port}...  on ENV ${process.env.NODE_ENV}`)
)