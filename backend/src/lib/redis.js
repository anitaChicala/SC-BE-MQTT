const Redis = require('ioredis')
const { cli } = require('winston/lib/winston/config')

const port = 6379
const host = 'redis'

const client = new Redis(port, host)
// const client = redis.createClient(port, host)

client.on('connect', function connected() {
  console.log('REDIS connected')
})

module.exports = {
 
  async saveTokenValor(key, value){
    await client.set(key, value)
    await client.expire(key, 10*24*60*60)
  },
  
  async  getTokenValor(key){
    var r = undefined
    
    await client.get(key,  function (err, result) {
      if (err) {
        return err;
      } else {
        r = result;
      }
    })
     return r

  },

  
  
  redisClient() {
    return client
  }

}
