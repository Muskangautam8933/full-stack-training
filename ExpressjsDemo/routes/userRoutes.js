const express = require('express');
const router = express.Router();

//import user controller
const {userDefault,userHome} = require("../controllers/userController");

//  localhost:8000/user
// router.get('/',(request,response)=>{
//     response.send("<h1 align='center'>Default User Page</h1>")
// })

router.get('/',userDefault);

//  localhost:8000/user/home
// router.get('/home',(request,response)=>{
//     response.send("<h1 align='center'>User Home Page</h1>");
// })

router.get('/home',userHome);

module.exports = router;