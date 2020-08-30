const mongoose=require("mongoose")

const lectureSchema=new mongoose.Schema({
    day:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    time:{
      type:String,
      default:"1-2"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
    ,
    category:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Category'

    }

},{timestamps:true});

module.exports=mongoose.model("Lecture",lectureSchema);
