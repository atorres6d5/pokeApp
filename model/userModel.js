const db = require('../db/knex')

class userModel{
constructor(){}
  static verifyEmail(email){
    return db('users')
      .where({email: email}, '*').first()
      .then(emailMatch => {
        return emailMatch ? true : false
      })
  }
  static signUp(data){
    console.log(data);
    return db('users').insert(data)
  }
  static getUserIdByEmail (email) {
    return db('users')
    .select('id')
    .where({ email })
    .first()
  }
  static getUserById(id){
    return db('users').where('id',id).first()
  }
}


module.exports = userModel
