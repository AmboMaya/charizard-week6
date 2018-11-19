const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const server = express()
// const apiRoute = require('../client/Components/api')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

// server.use('/api', apiRoute)

module.exports = server


//note to self: no modification required for this page