const {body} = require('express-validator')

const loginValidation = [
    body('email')
    .notEmpty()
    .withMessage('El email es obligatorio')
    .isEmail()
    .withMessage('Debe ser un email valido')
    .bail(),
    body('password')
    .notEmpty()
    .withMessage('la contraseña es obligatoria')
    .isLength({min: 2,
            max : 8})
    .withMessage('minimo 2 caracteres')
]

module.exports = {loginValidation}