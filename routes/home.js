const express=require("express");
const Router=express.Router();

const {getHomeData,loadLectureofUser}=require("../controllers/home")


Router.get('/getHomeData',getHomeData)
Router.get('/loadLectureofUser/:userId',loadLectureofUser)



module.exports=Router
