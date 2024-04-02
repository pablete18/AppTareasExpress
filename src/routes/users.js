const express = require('express');
const router = express.Router();
const { register, createUser,login,processLogin,logOut } = require('../controllers/userController');
const {registerValidation}= require('../validations/registerValidation');
const {loginValidation} = require('../validations/loginValidation')
const guestMiddleware = require('../middlewares/guestMiddleware')


/* / */
router.get('/',login);
router.post('/',loginValidation,processLogin) 
router.get('/register',guestMiddleware, register);
router.post('/register',registerValidation,createUser)
router.get('/home',logOut)

module.exports = router;