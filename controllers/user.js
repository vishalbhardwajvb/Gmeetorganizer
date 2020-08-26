
const User=require("../models/user")


module.exports.getUserById=(req,res,next,userId)=>{

    User.findById(userId).exec((err,user)=>{

        if(err)
        {
            return res.status(400).json({
                error:err,
                msg:"User By Id not Found"
            })
        }
        req.user=user;
        next();
    });
}