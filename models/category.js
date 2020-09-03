const mongoose=require("mongoose");

const categorySchema=new mongoose.Schema({

    category:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
    },
    url:{
      type:String
    }
},{timestamps:true})

module.exports=mongoose.model("Category",categorySchema);
