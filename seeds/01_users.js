
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Ash', 'email': 'ash@trainer.com', password:'master', team:'red', level:40},
        {id: 2, name: 'Gary', email:'gary@trainer.com', password:'password', team:'blue', level:40},
        {id: 3, name: 'Prof. Oak', email:'oak@trainer.com', password:'password', team:'yellow', level:40, role:'admin' }
      ]);
    })
  }