const db = require('../../database/models')
const sequelize = db.sequelize


module.exports = {
    findUser :async (req,res) =>{
        try {
            const user = await db.User.findOne({
                where :{
                     id : req.params.id
                },
                attibutes : {
                     exclude : ['createdAt','updatedAt']
                },
                include : [
                {
                 model: db.Task,
                 as : 'tasks'
                }
                ]})
            const total = await db.User.count()

            return res.status(200).json({
            ok : true,
            meta : {total},
            data : user

        })
            
        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                msg : error.message || "Parece que hubo un error"
            })
            
        }
        
    }
}