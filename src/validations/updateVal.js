const {body} = require('express-validator')

const validationUpdate = [
    body('status')
    .notEmpty()
    .withMessage('Debe elegir un estado de tarea')
    .bail()
]

module.exports = {validationUpdate}