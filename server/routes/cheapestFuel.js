const express = require('express')
const router = express.Router()
const db = require('../../database/db')

router.get('/', (req, res) => {
    res.json(db.getPrices())
})

router.use(express.json())

module.exports = router

// go to react-to-web-api exercise   from App.js