
const User=require('../models/user')
const Lecture=require("../models/lecture")


exports.getHomeData=(req,res)=>{

    User.find({role:0}).exec((err,users)=>{
        if(err)
        {
            return res.status(400).json({
                error:err
            })
        }

        return res.status(200).json(users);
    });

}

exports.loadLectureofUser=(req,res)=>{


  Lecture.find({userId:req.params.userId})
  .exec((err,lectures)=>{
      if(err)
      {
          return res.status(400).json({
              error:err
          })
      }

      return res.status(200).json(lectures);
  });

}
