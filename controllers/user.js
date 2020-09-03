
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

module.exports.getUser=(req,res)=>{

      return res.json({
          data:req.user,
          mesg:"Get User"
      });
}

module.exports.getAllUser=(req,res)=>{
    User.find({role:0}).exec((err,users)=>{
        if(err)
        {
            return res.status(400).json({
                error:err,
                msg:"User Not Found ERROR"
            })
        }

        return res.status(200).json(users);

    })
}


module.exports.deleteUser=(req,res)=>{
    const user=req.user;
    user.remove((err, user) => {
        if (err) {
          return res.status(400).json({
            error: "Failed to delete this user"
          });
        }
        res.json({
          message: "User Successfull deleted"
        });
      });
}
