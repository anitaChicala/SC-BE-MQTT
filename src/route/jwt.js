import { Router } from 'express'

const router = Router()

import JWT from '../models/JWT';



function decodeJWT(token) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}


function isInDB(token){

}


router
    .post('/saveToken', async (req, res) => {
    
    var t = req.body.token

    var d = decodeJWT(t)
    var e = d.exp
    var f = d.iss
    const newJwt = await JWT.create(
        {  token, e, f },
        {
          fields: [ "jwt", "expiration", "from"],
        }
      );
    
      if (newJwt) {
        res.status(200).json({
          message: "Jwt saved",
        });
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


  // Implement superuser only for SYmphony users so no ACL is checked agaisnt them
  .post('/superuser', async (req, res) => {
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

  // Implement all the Access Control List to restrict topics and publish
  .post('/acl', async  (req, res) => {
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


 
module.exports = router
