
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Ash', 'email': 'ash@trainer.com', team:'red', level:40},
        {id: 2, name: 'Gary', email:'gary@trainer.com', team:'blue', level:40},
        {id: 3, name: 'Prof. Oak', email:'oak@trainer.com', team:'yellow', level:40, role:'admin' }
      ])
      .then(() => {
        return knex.raw(
          "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
        )
      })
    })
  }
