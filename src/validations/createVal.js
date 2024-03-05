const {body} = require('express-validator')

const validationsCreate = [
    body('name')
    .notEmpty()    
    .withMessage('La tarea es obligatorio')
    .isLength({ min: 2})
    .withMessage('Debe tener como minimo 2 letras')
    .bail(),
    body('status')
    .notEmpty()
    .withMessage('Debe elegir un estado de tarea')
    .bail()
]

module.exports = {validationsCreate}