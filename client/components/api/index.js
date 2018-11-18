import request from "superagent"

export function displayPrices() {
  return request
    .get('/api/fueLio')
    .then(res => {
      const prices = res.body
      return prices
    })
    .catch(() => {
      throw Error('something went wrong')
    });
}




// const express = require('express')
// const router = express.Router()
// const fueLio = require('../../../routes/fueLio')

// router.use('/fueLio', fueLio)

// module.exports = router 



// note to self: this is where functions go