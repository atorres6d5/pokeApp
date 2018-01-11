const express = require('express')
const userCtrl = require('../ctrl/userCtrl')
const router = express.Router()


////create user routes, create new user, edit user profile, delete user

router.post('/signup', userCtrl.verifySignUp, userCtrl.signUp)
router.get('/profile/:id', userCtrl.getUserById)
//
// router.post('/new/raidGroup', userCtrl.verifyRaid)


module.exports = router
