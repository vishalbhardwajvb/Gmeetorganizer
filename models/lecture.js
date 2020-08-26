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
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true});

module.exports=mongoose.model("Lecture",lectureSchema);