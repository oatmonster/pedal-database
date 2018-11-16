const { Pool, Client } = require('pg')
const connectionString = 'postgres://ulzgrkrn:rkSCKEgR3I8sTs4CGyVkPnmVh0lHXip3@stampy.db.elephantsql.com:5432/ulzgrkrn'

const client = new Client({
  connectionString: connectionString,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})