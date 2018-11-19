import request from 'superagent'

const priceUrl = 'http://localhost:3000/'

export function DisplayPrices() {
  return request
    .get(priceUrl)
    .then(res => {
      const prices = res.body
      console.log(prices)
      return prices
    })
    .catch(() => {
      throw Error('something went wrong')
    })
}


// note to self: this is where functions go