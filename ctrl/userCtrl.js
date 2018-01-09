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
    userModel.signup(req.body.email)
    .then(result=>{
      if(!result){res.status(200).json({message: `Welcome to PokeApp ${req.body.name}`})}
      else{res.status(400).json({message:`${req.body.email} is already a user`})}

    })
  }

  static verifyRaid(req, res, next){
  const {location, meetUpTime, travel, raidAmount} = req.body
    if(!location){
      .then(res.status(400).json({message:`Where would you like to meet other trainers`}))
      }
    if(!meetUpTime){
      then(res.status(400).json({message:`When would you like to meet up other trainers`}))
    }
    if(!travel){
      then(res.status(400).json({message:`How would you like to get from gym to gym?`}))
    }
    if(!raidAmount){
      then(res.status(400).json({message:`How many raids would you like to attempt?`}))
    }
    else{next()}
  }

  static verifyBattle(req, res, next){
  const {location, meetUpTime, travel, time, team} = req.body
    if(!location){
      .then(res.status(400).json({message:`Where would you like to meet other trainers`}))
      }
    if(!meetUpTime){
      then(res.status(400).json({message:`When would you like to meet up other trainers`}))
    }
    if(!travel){
      then(res.status(400).json({message:`How would you like to get from gym to gym?`}))
    }
    if(!time){
      then(res.status(400).json({message:`How long would you like to battle gyms`}))
    }
    else{next()}
  }



}















module.exports = userCtrl
