
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table)=>{
    table.increments();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.enum('team', ['red', 'blue', 'yellow']).defaultTo(null);
    table.integer('level').notNullable().defaultTo(1);
    table.enum('role', [ 'admin', 'user' ]).notNullable() .defaultTo('user')
    table.integer('flakes').defaultTo(null)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
