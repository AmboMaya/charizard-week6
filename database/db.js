const knex = require('knex')
const config = require('../knexfile').development
const db = knex(config)

const bestPrice = {
  '91': {
    price: '\$2.21',
    station: {
      position: {
        lat: -36.880496,
        lng: 174.795649
      },
      provider : 'Z',
      address: '303 Remuera Rd, Remuera, Auckland 1050'
    }
  },
  '98': {
    price: '$2.74',
    station: {
      position: {
        lat: -36.867017,
        lng: 174.774982
      },
      provider : 'BP',
      address: '433 Khyber Pass Rd'
    }
  },
  '95': {
    price: '$2.20',
    station: {
      position: {
        lat: -36.867017,
        lng: 174.774982
      },
      provider : 'BP',
      address: '12 somestreet mt eden'
    }
  },
  'diesel': {
    price: '$1.20',
    station: {
      position: {
        lat: -36.885734,
        lng: 174.802882
      },
      provider : 'Mobil',
      address: '60 Green Ln E'
    }
  }
}

function findStations() {
  console.log('database')
  return db('fuelStations')
}

function getPrices() {
  return bestPrice
}

module.exports = {
  // displayPrices,
  findStations,
  getPrices
}