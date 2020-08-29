const express=require("express")
const Router=express.Router();


const {getUserById,getAllUser,deleteUser}=require("../controllers/user");


Router.param("userId",getUserById)




// Router.post("/category/create",createCategory);
// Router.put("/category/:userId/:categoryId",updateCategory);
// Router.delete("/category/:userId/:categoryId",deleteCategory);
// Router.get("/category/:userId/:categoryId",getCategory);
Router.get("/getAllUser",getAllUser);
Router.delete("/admin/:userId",deleteUser);



module.exports=Router
