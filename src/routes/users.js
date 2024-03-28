const express = require('express');
const router = express.Router();
const { register, createUser,login,processLogin } = require('../controllers/userController');
const {registerValidation}= require('../validations/registerValidation');
const {loginValidation} = require('../validations/loginValidation')
/* / */
router.get('/',login);
/* router.post('/',loginValidation,processLogin) */
router.get('/register', register);
router.post('/register',registerValidation,createUser)

module.exports = router;