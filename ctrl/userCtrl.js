const userModel = require('../model/userModel')



class userCtrl{
  constructor(){}

  static verifySignUp(req, res, next) {
    if(!req.body.name||!req.body.email||!req.body.password){
      return res.status(400).json({message:'All fields name, email, and password are required'})
    }
    next()
  }
  static verifyEmail(req, res, next) {
    userModel.verifyEmail(req.body.email)
      .then(result =>{
        if(result){
          res.status(400).json({message: 'someone has taken that email'})
        } else {
          console.log('no hits')
          res.status(200).json({message: 'Okay! :)'})
        }

      })
      .catch(err => {
        console.log(err)
      })
  }

  static signUp(req, res, next){
    userModel.signup(req.body)
    .then(result=>{
      res.status(200).json({message: 'Welcome to PokeApp'})
    })
  }

  static verifyRaid(req, res, next){
    
  }


}















module.exports = userCtrl
