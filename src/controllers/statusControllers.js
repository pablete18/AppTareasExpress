const db = require('../database/models')

module.exports ={
    list : async(req,res)=>{
 try{
    const statuses= await db.Status.findAll({
        order:[["id","ASC"],['name']]
    })
    return res.render('index',{
            statuses
        })
    
 }       
    catch(error){
        console.log(error)
    } 
    }
}