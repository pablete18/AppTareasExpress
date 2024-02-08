const express = require('express');
const router = express.Router();
const {create} = require('../controllers/taskControllers')
const {list} = require('../controllers/statusControllers')
/* /home*/

router.get('/',list);


module.exports = router;
