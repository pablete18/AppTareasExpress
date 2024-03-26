const db = require('../database/models')

module.exports = {
     createUser : (req,res)=>{
       const {name,surname,email} = req.body;
       db.User.create({
        name : name,
        surname: surname,
        email: email
       })
       .then(response =>{
        return res.redirect('/home')
       })
       .catch((error)=>{
        console.log(error)
       })
    }, 
    index : (req,res)=>{       
            return res.render("register")            
        }   
    }
