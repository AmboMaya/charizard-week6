const express = require('express')
const router = express.Router()
const db = require('../database/db')

router.get('/', (req, res) => {
  db.DisplayPrices().then()
})

module.exports = router