const express = require('express');
const router = express.Router()
const {findUser}= require('../../controllers/apis/apiUserController')


/* /api/users */

router.get('/:id', findUser)


module.exports = router