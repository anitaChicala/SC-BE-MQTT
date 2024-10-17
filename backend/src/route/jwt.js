import { Router } from 'express'
// var { Router } = require('express')
const router = Router()
const redis = require("../lib/redis");

// import JWT from '../model/JWT';



function decodeJWT(token) {

  try {


    token = JSON.stringify(token)
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());

  } catch (error) {
    console.log(error, "token: " + token);
  }
}


// function isInDB(token) {

// }


router
  .post('/saveToken', async (req, res) => {

    try {
      var jwt = req.body.token


      var d = decodeJWT(jwt)
      console.log(d);
      console.log(d.exp);
      var expiration = d.exp + ""
      var from = d.iss + ""


      console.log(expiration, from);
      var obj = { jwt, expiration, from }
      var message = JSON.stringify(obj);

      await redis.saveTokenValor(
        `${d.email}/${jwt}`,
        message
      );


      res.status(200).json({
        message: "Jwt saved",
        jwt
      });
      // }
    } catch (error) {
      res.status(500).json({
        message: "MQTT Server had a problem",
        error: error
      });
    }



  })
  .get('/', async (req, res) => {

    //Si esta en la base de datos okey

    // var j = await JWT.findAll()

    // if (j) {
    //   res.status(200).send({
    //     // user,
    //     jwts: j
    //   })
    // }


  })
  .post('/', async (req, res) => {
    // try {
    //   //Si esta en la base de datos okey
    //   var token = req.headers.authorization
    //   var t = decodeJWT(token)

    //   var data = await redis.getTokenValor(
    //     `${t}/data`
    //   );

    //   if (data) {
    //     res.status(200).send({
    //       message: 'JWT valid'
    //     })
    //   }
    // } catch (error) {
    //   res.status(500).json({
    //     message: "MQTT Server had a problem",
    //     error: error
    //   });
    // }



  })
  .post('/user', async (req, res) => {

    try {
      //Si esta en la base de datos okey
      var token = req.headers.authorization
      token = token.split(' ')[1]

    
      // console.log(d);
      // console.log(d.exp);
      // var expiration = d.exp + ""
      // var from = d.iss + ""

      if (
        token === "rcsi" ||
        token === "cloud" ||
        token === "symphony" ||
        token === "dublinoak" ||
        token === "tesco" ||
        token === "tara" ||
        token === "pwc" ||
        token === "hibernia" ||
        token === "blackrock" ||
        token === "em" ||
        token === "linx" ||
        token === "well"
      ) {
        return res.status(200).send({
          // user,
          message: 'JWT valid'
        })
      }
      var d = decodeJWT(token)

      var data = await redis.getTokenValor(
        `${d.email}/${token}`
      );

      if (data) {
        res.status(200).send({
          message: 'JWT valid'
        })
      }

    } catch (error) {
      res.status(500).json({
        message: "MQTT Server had a problem",
        error: error
      });
    }


  })


  // Implement superuser only for SYmphony users so no ACL is checked agaisnt them
  .post('/superuser', async (req, res) => {

    try {
      //Si esta en la base de datos okey
      var token = req.headers.authorization
      token = token.split(' ')[1]
      

      if (
        token === "rcsi" ||
        token === "cloud" ||
        token === "symphony" ||
        token === "dublinoak" ||
        token === "tesco" ||
        token === "pwc" ||
        token === "tara" ||
        token === "hibernia" ||
        token === "blackrock" ||
        token === "em" ||
        token === "linx" ||
        token === "well"
      ) {
        return res.status(200).send({
          // user,
          message: 'JWT valid'
        })
      }

      var d = decodeJWT(token)

      var data = await redis.getTokenValor(
        `${d.email}/${token}`
      );

      if (data) {
        res.status(200).send({
          message: 'JWT valid'
        })
      }
    } catch (error) {
      res.status(500).json({
        message: "MQTT Server had a problem",
        error: error
      });
    }






  })

  // Implement all the Access Control List to restrict topics and publish
  .post('/acl', async (req, res) => {

    try {
      //Si esta en la base de datos okey
      var token = req.headers.authorization
      token = token.split(' ')[1]
    
      if (
        token === "rcsi" ||
        token === "cloud" ||
        token === "symphony" ||
        token === "dublinoak" ||
        token === "tesco" ||
        token === "pwc" ||
        token === "tara" ||
        token === "hibernia" ||
        token === "blackrock" ||
        token === "em" ||
        token === "linx" ||
        token === "well"
      ) {
        return res.status(200).send({
          // user,
          message: 'JWT valid'
        })
      }

      var d = decodeJWT(token)

      var data = await redis.getTokenValor(
        `${d.email}/${token}`
      );

      if (data) {
        res.status(200).send({
          message: 'JWT valid'
        })
      }
    } catch (error) {
      res.status(500).json({
        message: "MQTT Server had a problem",
        error: error
      });
    }


  })



module.exports = router
