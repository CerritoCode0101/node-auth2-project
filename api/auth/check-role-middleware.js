module.exports = (role) => (req,res,next) =>{
    if(req.decodedToken.role === role){
        next()
    }else{
        res.status(403).json("You are not an admin, YOU SHALL NOT PASS!!!!")
    }
}