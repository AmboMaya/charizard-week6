const knex = require('knex')
const config = require('../knexfile').development
const db = knex(config)

function DisplayPrice() {
  console.log('database')
  return db('providers')
  // .then(res => {
  //   console.log(res)
  // })
}


module.exports = DisplayPrice