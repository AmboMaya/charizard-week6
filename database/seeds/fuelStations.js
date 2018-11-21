
exports.seed = (knex)=>
  knex('fuelStations').del()
    .then(function () {
      // Inserts seed entries
      return knex('fuelStations').insert([
        {id: 1, companyName: 'BP', address:'2 Meadowbank Rd'},
        {id: 2, companyName: 'BP', address:'47-55 Jervois Rd'},
        {id: 3, companyName: 'BP', address:'925 Mount Eden Rd'},
        {id: 4, companyName: 'BP', address:'267 Mount Smart Rd'},
        {id: 5, companyName: 'BP', address:'433 Khyber Pass Rd'}
      ])
    })


    

