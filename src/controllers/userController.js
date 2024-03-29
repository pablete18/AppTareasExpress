const db = require('../database/models')
const {validationResult} = require('express-validator')
const bcryptjs = require('bcryptjs')

module.exports = {
     createUser :async(req,res)=>{
      let errors = validationResult(req)
      
      if(!errors.isEmpty()) {
        return res.status(400).render('register',{
          errors : errors.array(),
          old : req.body
        })
        
   }
      try {
          const {name,surname,email,password} = req.body;
           
          await db.User.create({
            name :name,
            surname:surname,
            email:email,
            password :bcryptjs.hashSync(password,10)         
           })
   
            return res.redirect('login')
           
         }
        catch (error) {
        console.log(error)
        
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
