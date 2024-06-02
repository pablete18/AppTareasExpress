const db = require('../../database/models')
const sequelize = db.sequelize


module.exports = {
    findUser :async (req,res) =>{
        try {
            const user = await db.User.findOne({
                where :{
                     id : req.params.id
                },
                attributes : {
                     exclude : ["createdAt","updatedAt"]
                },
                include : [
                {
                 model: db.Task,
                 as : 'tasks',
                 attributes : {
                    exclude : ['userId','createdAt','updatedAt']
                 }
                 
                }
                ]})
            const totalUsers = await db.User.count()
            const statuses = await db.Status.findAll({
                attributes : {
                    exclude : ['createdAt','updatedAt']
                }
            })

            return res.status(200).json({
            ok : true,
            meta : {totalUsers},
            data : user,
            statusName : statuses

        })
            
        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                msg : error.message || "Parece que hubo un error"
            })
            
        }
        
    }
}