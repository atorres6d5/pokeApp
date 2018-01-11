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
    return db('users').returning('*').insert(data)
  }
  static getUserIdByEmail (email) {
    return db('users')
    .select('id')
    .where({ email })
    .first()
  }
  static getUserById(id){
    return db('users').returning('*').where('id',id).first()
  }
  static editUserById(id, data){
    return db('users').where('id', id)
    .update(data)
  }
  static deleteUserById(id){
    return db('users').where('id', id).del()
  }
}


module.exports = userModel
