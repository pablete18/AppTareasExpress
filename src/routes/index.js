const express = require('express');
const router = express.Router();
const {create,createTask,listTasks,update,destroy} = require('../controllers/taskControllers')
const {list} = require('../controllers/statusControllers')
const {validationsCreate} = require('../validations/createVal')
/* /home*/


router.get('/create',create)
router.post('/create',validationsCreate,createTask)
router.get('/',listTasks)
router.get('/',list);
router.put('/:id',update)

router.delete('/:id',destroy)


module.exports = router;
