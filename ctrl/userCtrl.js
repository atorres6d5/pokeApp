const userModel = require('../model/userModel')



class userCtrl{
  constructor(){}

  static verifySignUp(req, res, next) {
    const { email, name } = req.body

    // Verify fields exist
    if (!name) throw new Error('missingFirstname')
    if (!email) throw new Error('missingEmail')
    // Auth goes here


    //Auth goes here

    next()
  }

  static signUp(req, res, next){
    const newUser = req.body
    userModel.signUp(newUser).then(
      result=>{
        res.status(200).json({message:`Welcome To The Pokemon Center ${newUser.name}`})
      }
    )
  }

  static getUserById(req, res, next){
    const id=req.params.id
    userModel.getUserById(id).then(result=>{
      console.log({result})
      res.status(200).json(result)
    })

  }

  // static verifyRaid(req, res, next){
  // const {location, meetUpTime, travel, raidAmount} = req.body
  //   if(!location){
  //     .then(res.status(400).json({message:`Where would you like to meet other trainers`}))
  //     }
  //   if(!meetUpTime){
  //     .then(result=>res.status(400).json({message:`When would you like to meet up other trainers`}))
  //   }
  //   if(!travel){
  //     then(res.status(400).json({message:`How would you like to get from gym to gym?`}))
  //   }
  //   if(!raidAmount){
  //     then(res.status(400).json({message:`How many raids would you like to attempt?`}))
  //   }
  //   else{next()}
  // }
  //
  // static verifyBattle(req, res, next){
  // const {location, meetUpTime, travel, time, team} = req.body
  //   if(!location){
  //     .then(res.status(400).json({message:`Where would you like to meet other trainers`}))
  //     }
  //   if(!meetUpTime){
  //     then(res.status(400).json({message:`When would you like to meet up other trainers`}))
  //   }
  //   if(!travel){
  //     then(res.status(400).json({message:`How would you like to get from gym to gym?`}))
  //   }
  //   if(!time){
  //     then(res.status(400).json({message:`How long would you like to battle gyms`}))
  //   }
  //   else{next()}
  // }
  //


}















module.exports = userCtrl
