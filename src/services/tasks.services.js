const db = require ('../database/models')
const sequelize = db.sequelize

module.exports = {
    getTaskByUser : async(req,res) =>{
        try {
          const user = await db.User.findOne({
            where : {
                id : req.params.id
            },
            attributes : {
                exclude : ['createdAt','updatedAt']
            },
            include : [
                {
                   model : db.Task,
                   as : 'tasks'
                },
            ]
          })
          const total = await db.Task.count()
          const statuses = await db.Status.findAll({
            order : ['name']
          })
          return {
            user,
            total,
            statuses
          }
            
        } catch (error) {
            console.log()
            
        }
    }
}