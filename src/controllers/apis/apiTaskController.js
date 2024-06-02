const db = require("../../database/models")
const sequelize = db.sequelize


module.exports = {
    createTask : async(req,res)=>{


        try {
        
           const user = await db.User.findOne({
            where : {
                id : req.params.id
            }
           }) 
                       
           console.log (req.body)
            const { name, statusId } = req.body
           
            const newTask = await db.Task.create({
                name : name,
                statusId,
                userId: user.id

            })
            return res.status(200).json({
                ok : true,                  
                data : newTask,
                msg : "tarea creada con exito"                    
               })
                

           }
           
            
        catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                msg : error.message || "Parece que hubo un error"
            })
        }
    },
    updateTask :async (req,res)=>{
        try {

            const taskId = req.params.id
            const {name, status} = req.body

           await db.Task.update({
                name : name,
                statusId : status
            },
            {
                where : {id: taskId}
            })
            return res.status(200).json({
                ok: true,
                data : { name, status},
                msg : "Tarea actualizada con exito"
            })
        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                msg : error.message || "Parece q hubo un error"
            })
        }

    },
    destroyTask : async(req,res)=>{
        try {
            const taskId = req.params.id

           const taskDestroyed =  await db.Task.destroy({
                where: {id : taskId}
            })

            return res.status(200).json({
                ok: true,
                data : taskDestroyed,
                msg : "Tarea eliminada con exito "

            })
            
        } catch (error) {
            return res.status(error.status || 500).json ({
                ok: false,
                msg : error.message || "Parece q hubo un error"
            })
            
        }
    }
}