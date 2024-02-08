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
        .then(([task,statuses])=>{
            res.render("index",{
                task,
                statuses
            })
        })
        .catch(error=>{
            console.log(error)
        })

    }
}