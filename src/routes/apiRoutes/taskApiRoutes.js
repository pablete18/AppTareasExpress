const express= require('express');
const router = express.Router()
const { createTask, updateTask, destroyTask } = require('../../controllers/apis/apiTaskController')
const { validationsCreate } = require('../../validations/createVal')


/* /api/taskes */

router.get('/',validationsCreate,createTask)
    .put('/:id', updateTask)
    .delete('/:id', destroyTask)


module.exports = router