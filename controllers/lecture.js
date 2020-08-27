const Lecture=require("../models/lecture")

module.exports.createLecture=(req,res)=>{

    const lecture=new Lecture(req.body);
    lecture.save((err,lecture)=>{

        if(err)
        {
            return res.status(400).json({
                error:err,
                msg:"Lecture Created Error "
            })
        }

        return res.status(200).json({
            created_Lecture:lecture
        })

    })

}

module.exports.deleteLecture=(req,res)=>{

    Lecture.findByIdAndDelete(req.lecture._id).exec((err)=>{

        if(err)
        {
            return res.status(400).json({
                error:err,
                msg:"Lecture Deleted Error "
            })
        }
        return res.status(200).json({
            Deleteted_Lecture:"Successfully Deleted"
        })
    })

}


module.exports.updateLecture=(req,res)=>{

    let lecture=req.lecture;
    lecture.day=req.body.day;
    lecture.description=req.body.description;
    lecture.url=req.body.url;


    lecture.save((err,lectureUpdated)=>{
        if(err)
        {
          console.log(err);
            return res.status(400).json({
                error:err,
                msg:"Lecture Updated Error "
            })

        }

        return res.status(200).json({
            updated_Lecture:lecture
        })

    })
}

module.exports.getAllLecture=(req,res)=>{

    Lecture.find({userId:req.params.userId}).exec((err,lectures)=>{

            if(err)
            {
                return res.status(400).json({
                    error:err,
                    msg:"ALL LECTURE ERROR"
                })
            }

            return res.json({
                lecture:lectures
            })
    });

}

module.exports.getLecture=(req,res)=>{

    return res.json({
        lecture:req.lecture
    })

}


module.exports.getLectureByID=(req,res,next,lectureId)=>{
    Lecture.findById(lectureId).exec((err,lecture)=>{
        if(err)
        {
            return res.status(400).json({
                error:err
            })
        }
        else
        {
            req.lecture=lecture;
            next();
        }
    })

}
