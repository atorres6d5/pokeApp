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
    return db.insert({data})
  }
}


module.exports = userModel
