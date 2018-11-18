
exports.seed = (knex)=>
  knex('providers').del()
    .then(function () {
      // Inserts seed entries
      return knex('providers').insert([
        {id: 1, companyName: 'BP', address:'100 carlton gore, newmarket'},
        {id: 2, companyName: 'BP', address:'101 carlton gore, newmarket'},
        {id: 3, companyName: 'BP', address:'102 carlton gore, newmarket'},
        {id: 4, companyName: 'Z', address:'434 Ellerslie, Panmure Hwy'},

      ])
    })
