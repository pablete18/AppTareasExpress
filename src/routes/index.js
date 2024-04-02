const express = require('express');
const router = express.Router();
const {create,createTask,home,update,destroy} = require('../controllers/taskControllers')
const {list} = require('../controllers/statusControllers')
const {validationsCreate} = require('../validations/createVal')
const {validationUpdate} = require('../validations/updateVal')
const authMiddleware = require('../middlewares/authMiddleware')
/* /home*/


router.get('/create',create)
router.post('/create',validationsCreate,createTask)
router.get('/',authMiddleware,home)
router.get('/',list);
router.put('/:id',validationUpdate,update)

router.delete('/:id',destroy)


module.exports = router;
