const db = require("../../database/models")
const sequelize = db.sequelize
const { getTaskByUser }= require('../../services/tasks.services')


module.exports = {
    list : async(req,res)=>{
        try {
           const {user,total,statuses} = await getTaskByUser()
           return res.status(200).json({
            ok : true,
            meta : {
                total
            },
            data : user,
            statuses : statuses
           })
            
        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                msg : error.message || "Parece que hubo un error"
            })
        }
    }
}