const mongoose=require("mongoose");
const Category=require("../models/category");


module.exports.getCategoryById=(req,res,next,Id)=>{
    Category.findById(Id).exec((err,category)=>{
        if(err)
        {
            return res.status(400).json({
                error:err
            })
        }
        else
        {
            req.category=category;
            next();
        }
    })
}


module.exports.createCategory=(req,res)=>{
    const category=new Category(req.body);
    category.save((err,category)=>{
        if(err)
        {
            return res.status(400).json({
                error:err
            })
        }

        return res.status(200).json({
            data:category,
            mesg:"Category Created SuccessFully"
        })
    })

}

exports.getCategory = (req, res) => {
    return res.json({
        data:req.category,
        mesg:"Get Category"
    });
};


exports.getAllCategories=(req,res)=>{

    Category.find().sort({categories:1}).exec((err, categories) => {
        if (err) {
          return res.status(400).json({
            error: "NO categories found"
          });
        }
        res.json(categories);
      });

}



exports.updateCategory=(req,res)=>{

    const cateGory=req.category;
    cateGory.category=req.body.category
    cateGory.url=req.body.url;

    cateGory.save((err,category)=>{
        if(err)
        {
            return res.status(400).json({
                error:err
            })
        }

        return res.status(200).json({
            data:cateGory,
            mesg:"Category Updated SuccessFully"
        })
    })

}

exports.deleteCategory=(req,res)=>{

    const category = req.category;

    category.remove((err, category) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to delete this category"
        });
      }
      res.json({
        message: "Successfull deleted"
      });
    });
}
