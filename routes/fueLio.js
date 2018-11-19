const express = require('express')
const router = express.Router()
const db = require('../database/db')

router.get('/', (req, res) => {
  console.log('test')
  db.DisplayPrice()
  .then(price => {
    console.log(price)
    res.json(price)
  })
})

router.use(express.json())

module.exports = router