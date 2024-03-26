const express = require('express');
const router = express.Router();
const { index, createUser } = require('../controllers/userController');
/* / */
router.get('/', index);
router.post('/',createUser)

module.exports = router;