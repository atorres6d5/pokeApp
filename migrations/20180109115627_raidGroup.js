
exports.up = function(knex, Promise) {
  return knex.schema.createTable('raidGroup', table=>{
    table.increments();
    table.string('location').notNullable().defaultTo('47.979103, -122.201676');
    table.integer('meetUpTime').defaultTo(Date.now());
    table.enum('Travel'['Car', 'Foot', 'Both']).notNullable().defaultTo('Foot');
    table.integer('Raid_Attempts').notNullable().defaultTo(3);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('raidGroup')
};
