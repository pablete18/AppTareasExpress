const express = require('express');
const router = express.Router()
const {findUser}= require('../../controllers/apis/apiUserController')
const { createTask }= require ('../../controllers/apis/apiTaskController')




/* /api/users */

router.get('/:id', findUser)
router.post('/:id', createTask)


module.exports = router