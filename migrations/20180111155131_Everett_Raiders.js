
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Everett_Raiders', (table)=>{
    table.increments();
    table.string('Meet up location').notNullable().defaultTo('Transit Center')
    table
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Everett_Raiders')
};
