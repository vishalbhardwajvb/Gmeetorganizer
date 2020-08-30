const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        maxlength:20
    },
    email:{
        type:String,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        maxlength:15
    },
    role:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
    },

    lectures:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Lecture",
    }

},{timestamps:true})

module.exports=mongoose.model("User",userSchema);
