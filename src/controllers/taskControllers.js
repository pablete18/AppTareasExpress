const db = require("../database/models")
const {validationResult} = require('express-validator')

module.exports = {
    create : (req,res)=>{
        
        Promise.all ([
            db.Task.findAll({
                order:["name"]
            }               
            ),
            db.Status.findAll({
                order : ["name"]
            })
        ])
        .then(([taskes,statuses])=>{
            res.render("index",{
                taskes,
                statuses
            })
        })
        .catch(error=>{
            console.log(error)
        })

    }, 
    home:async (req,res)=>{
        try {
            const user = await db.User.findOne({
                where : {
                    id : req.session.userLogged.id
                },
                include : [
                    {
                        model:db.Task,
                        as :"tasks"
                    }
                ]
            })
            const statuses = await db.Status.findAll({
                    order : ["name"]
                })
            
            
             return res.render("index",{   
                    user,
                    statuses
            })
            
        } catch (error) {
            console.log(error)
        }
    },
    createTask : async(req,res)=>{
        try {
            let errors = validationResult(req) 
            const user = await db.User.findOne({
                where : {
                    id : req.session.userLogged.id
                }})
            if(errors.isEmpty()){
                const {name,status}= req.body
            
               await db.Task.create({
                    name : name,
                    statusId : status,
                    userId : user.id
                    
                })
                
                
                    return res.redirect("/home");
                
               
                
            }else{
        
                
                 const taskes =  await db.Task.findAll({
                        order:["name"]
                    }               
                    )
                  const statuses= await db.Status.findAll({
                        order : ["name"]
                    })
               
                
                   return res.render("index",{
                        taskes,
                        statuses,
                        errors : errors.array(),
                        old :req.body,
                    })
             
            }
           
            
        } catch (error) {
            console.log(error);
        }
       
      
    },
   
    update : async(req,res)=>{
        let errors = validationResult(req)
        if(errors.isEmpty()){
            try {
                const taskId = req.params.id
                const {name,status}= req.body
        
               await db.Task.update({
                    name : name,
                    statusId : status
                },
                {
                    where : {id : taskId}
                });
               return res.redirect('/home')
                
            } catch (error) {
                console.log('error al editar la tarea');
            }
        }else{
            try {
                const taskes =  await db.Task.findAll({
                    order : ["name"]
                })
                const statuses = await db.Status.findAll(
                {order : ['name']}
            )
                res.render('index',{
                    taskes,
                    statuses,
                    errors : errors.array(),
                    old :req.body
                })
            } catch (error) {
                console.log('error al editar la tarea')
            }
          
        }
       
       
    },
    destroy : async(req,res)=>{
        try {
            const taskId = req.params.id;
          await db.Task.destroy({
                where : {id : taskId}
            });
           return res.redirect('/home')
            
        } catch (error) {
            console.log('error al eliminar la tarea');
        }
       

    }
}