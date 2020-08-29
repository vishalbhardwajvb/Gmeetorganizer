const express=require("express")
const Router=express.Router();

const {getCategoryById,
        createCategory,
        getCategory,
        getAllCategories,
        updateCategory,
        deleteCategory
        }=require("../controllers/category");

const {getUserById}=require("../controllers/user");


Router.param("categoryId", getCategoryById);
Router.param("userId",getUserById)




Router.post("/category/create",createCategory);
Router.put("/category/:userId/:categoryId",updateCategory);
Router.delete("/category/:userId/:categoryId",deleteCategory);
Router.get("/category/:userId/:categoryId",getCategory);
Router.get("/getAllCategories",getAllCategories);



module.exports=Router
