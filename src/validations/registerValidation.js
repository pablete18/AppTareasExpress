const {body} = require('express-validator')
const db = require('../database/models')

const registerValidation = [
    body('name')
    .notEmpty()
    .withMessage('el nombre es obligatorio')
    .isAlpha('es-ES')
    .withMessage('solo se permiten caracteres alfabeticos en nombre')
    .bail(),
    body('surname')
    .notEmpty()
    .withMessage('el apellido es obligatorio')
    .isAlpha('es-ES')
    .withMessage('solo se permiten caracteres alfabeticos en apellido')
    .bail(),
    body('email')
    .notEmpty()
    .withMessage('el email es obligatorio')
    .isEmail()
    .withMessage('Debe ser un email valido')
    .custom(async(email)=>{
        const userInDb = await db.User.findOne({
            where :{email}
          })
       
        if(userInDb){
            return Promise.reject('El email ya está en uso')            
          }

    })
    .bail(),
    body('password')
    .notEmpty()
    .withMessage('la contraseña es obligatoria')
    .isLength({min:2,
    max:8})
    .withMessage('la contraseña debe tener minimo 2 caracteres y maximo 8 caracteres')
    .bail()
]

module.exports = {registerValidation}