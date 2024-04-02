function guestMiddleware(req,res,next){
    if(req.session.userLogged){
        res.redirect('/home')

    }
    next()
}

module.exports = guestMiddleware