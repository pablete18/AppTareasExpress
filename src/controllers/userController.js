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
   
            return res.redirect('/')
           
         }
        catch (error) {
        console.log(error)
        
      }
     
    },     
     
    register : (req,res)=>{       
            return res.render("register")            
    },

    login: (req,res)=>{
      console.log(req.session)
      return res.render('login')
    },

    processLogin:async(req,res)=>{
     try {

      const {email,password} = req.body

      let userInDb = await db.User.findOne({
        where: {email}
      })

      if(userInDb){        
        req.session.userLogged = userInDb

        let isOkPass = await bcryptjs.compare(password,userInDb.password)

        if (isOkPass) {
         return res.redirect('/home')
        }
        return res.render('login',{
          errors:{
            email:{
              msg : "Credenciales invalidas"
            }
          }
        })

      }
      return res.render('login',{
        errors:{
          email:{
            msg : "No se enceuntra el mail en la base de datos"
          }
        }
      })
     }
      catch (error) {
      console.log(error)
      
     } 
    },
    logOut : (req,res)=>{
      req.session.destroy()
      return res.redirect('/')
    }     
    }
