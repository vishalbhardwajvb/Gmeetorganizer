var express = require("express");
var router = express.Router();

const { check, validationResult } = require("express-validator");
const { signout, signup, signin } = require("../controllers/auth");



router.post(
  "/signup",(req,res)=>console.log(req.body,"hellooo"),
  [
    check("name", "name lenght should  smaller than  20 and greater than 4").isLength({ min: 3 ,max:20}),
    check("email", "email is required").isEmail(),
    check("password", "password should be at least 3 char").isLength({ min: 3 }),
  ],
  signup
);


router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 1 })
  ],
  signin
);

router.get("/signout", signout);

module.exports = router;
