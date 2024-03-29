const express  = require('express')
const { createNewUser, LoginUser, signUpUser, loginUser ,fetchMe} = require('../controllers/user-controller')
const router  = express.Router()


router.post('/newuser',signUpUser);
router.post('/login',loginUser)
router.get('/fetchme', fetchMe)


module.exports = router;