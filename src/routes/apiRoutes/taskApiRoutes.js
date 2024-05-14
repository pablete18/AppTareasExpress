const express= require('express');
const router = express.Router()
const { list} = require('../../controllers/apis/apiTaskController')


/* /api/taskes */

router.get('/:id',list)


module.exports = router