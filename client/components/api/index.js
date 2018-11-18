import request from 'superagent'

export function DisplayPrices() {
  return request
    .get('/api/fueLio')
    .then(res => {
      // const prices = res.body
      // return prices
      console.log(res)
    })
    .catch(() => {
      throw Error('something went wrong')
    });
}


// note to self: this is where functions go