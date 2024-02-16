import { Router } from 'express'
// var { Router } = require('express')
const router = Router()

import JWT from '../model/JWT';



function decodeJWT(token) {

  try {
   
  token = JSON.stringify(token)
  return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());

  } catch (error) {
  console.log(error , "token: "+ token);    
  }}


function isInDB(token){

}


router
    .post('/saveToken', async (req, res) => {
    var jwt = req.body.token


    var d = decodeJWT(jwt)
    console.log(d);
    console.log(d.exp);
    var expiration = d.exp +""
    var from = d.iss + ""


    console.log(expiration, from);


    const newJwt = await JWT.create(
        {  jwt, expiration, from },
        {
          fields: [ "jwt", "expiration", "from"],
        }
      );
    
      if (newJwt) {
        res.status(200).json({
          message: "Jwt saved",
          jwt:newJwt
        });
      }


  })
  .get('/', async (req, res) => {
    
    //Si esta en la base de datos okey
    
    var j = await JWT.findAll()

    if(j) {
        res.status(200).send({
            // user,
            jwts: j
          })
    }

    
  })
  .post('/', async (req, res) => {
    
    //Si esta en la base de datos okey
    var token = req.headers.authorization
    var t = decodeJWT(token)

    var j = await JWT.findOne({
        where: {
            jwt:t
        }
    })

    if(j) {
        res.status(200).send({
            // user,
            message: 'JWT valid'
          })
    }

    
  })
  .post('/user', async (req, res) => {
    //Si esta en la base de datos okey
    var token = req.headers.authorization
    token = token.split(' ')[1]


    var j = await JWT.findOne({
        where: {
            jwt:token
        }
    })

    if(j) {
        res.status(200).send({
            // user,
            message: 'JWT valid'
          })
    }
  })


  // Implement superuser only for SYmphony users so no ACL is checked agaisnt them
  .post('/superuser', async (req, res) => {
    //Si esta en la base de datos okey
    var token = req.headers.authorization
    token = token.split(' ')[1]

    

    var j = await JWT.findOne({
        where: {
            jwt:token
        }
    })

    if(j) {
        res.status(200).send({
            // user,
            message: 'JWT valid'
          })
    }
  })

  // Implement all the Access Control List to restrict topics and publish
  .post('/acl', async  (req, res) => {
    //Si esta en la base de datos okey
    var token = req.headers.authorization
    token = token.split(' ')[1]

    var t = decodeJWT(token)
    console.log(t);


    var j = await JWT.findOne({
        where: {
            jwt:token
        }
    })

    if(j) {
        res.status(200).send({
            // user,
            message: 'JWT valid'
          })
    }
  })


 
module.exports = router
