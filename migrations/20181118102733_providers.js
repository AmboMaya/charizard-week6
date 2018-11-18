exports.up = (knex) => {
  return knex.schema.createTable('providers', (table) => {
    table.increments('id').primary()
    table.string('companyName')
    table.string('address')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('providers')
}
