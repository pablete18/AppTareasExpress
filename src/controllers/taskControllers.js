const db = require("../database/models")

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
        .then(([tasks,statuses])=>{
            res.render("index",{
                tasks,
                statuses
            })
        })
        .catch(error=>{
            console.log(error)
        })

    },
    createTask : (req,res)=>{
        const {name,status}= req.body
        db.Task.create({
            name : name,
            statusId : status
        })
        .then(response => {
            return res.redirect("/home");
          })
          .catch((error) => {console.log(error);});
        
    },
    listTasks:async (req,res)=>{
        try {
           
            const taskes= await db.Task.findAll({
                    order:["name"]
                }               
                )
            const statuses = await db.Status.findAll({
                    order : ["name"]
                })
            
            
             return res.render("index",{
                    taskes,
                    statuses
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}