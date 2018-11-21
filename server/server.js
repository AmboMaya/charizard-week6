const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const fueLio = require('./routes/cheapestFuel')

const server = express()
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

server.use('/bestPrice', fueLio)

module.exports = server

