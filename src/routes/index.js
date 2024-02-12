const express = require('express');
const router = express.Router();
const {create,createTask,listTasks} = require('../controllers/taskControllers')
const {list} = require('../controllers/statusControllers')
/* /home*/
router.get('/',listTasks)
router.get('/',list);
router.get('/',create)
router.post('/',createTask)

module.exports = router;
