const express=require("express");
const Router=express.Router();
const {getAllLecture,createLecture,deleteLecture,updateLecture,getLectureByID} =require("../controllers/lecture");
const {getUserById}=require("../controllers/user")


Router.param("lectureId",getLectureByID);
Router.param("userId",getUserById)

Router.post('/lecture/:userId/create',createLecture);
Router.put('/lecture/:userId/:lectureId',updateLecture);
Router.delete('/lecture/:userId/:lectureId',deleteLecture);
Router.get('/getAllLecture/:userId',getAllLecture)



module.exports=Router
