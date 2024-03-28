const db = require('../database/models')
const {validationResult} = require('express-validator')

module.exports = {
     createUser : (req,res)=>{
      let errors = validationResult(req)

      if (errors.isEmpty()) {
        const {name,surname,email,password} = req.body;
        db.User.create({
         name : name,
         surname: surname,
         email: email,
         password : password
        })
        .then(response =>{
         return res.redirect('/home')
        })
        .catch((error)=>{
         console.log(error)
        })
        
      } else {
        return res.render('register',{
          errors : errors.array(),
          old : req.body
        })
        
      }
      
    }, 
    register : (req,res)=>{       
            return res.render("register")            
    },
    login: (req,res)=>{
      return res.render('login')
    }/* ,
    processLogin:(req,res)=>{
      
    }    */
    }
