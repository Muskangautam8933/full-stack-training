const express = require('express');
const router = express.Router();

//import admin controller
const {adminDefault , adminHome , getAdminData , addUser, showUser , editUser, deleteUser} = require('../controllers/adminController');


//localhost:8000/admin : yaha requst tb ayegi jab url per admin likhenge
//jab router ka use ho to ham raste bta rhe hai
// router.get('/',(request,response)=>{  isko comment isliye karenge kyuki controller ka code alag likhenge
//     response.send("<h1 align='center'>Admin Default Page</h1>");
// })

router.get('/',adminDefault)

//localhost:8000/admin/home
// router.get('/home',(request,response)=>{
//     response.send("<h1 align='center'>Admin Home Page</h1>");
// })

// router.get('/:adminNm',getAdminData);

router.get('/home',adminHome);

router.get('/getAdminData',getAdminData);

router.get('/addUser',addUser);
router.post('/addUser',addUser);


router.get('/showUser',showUser);

router.get('/editUser/:id',editUser);
router.post('/editUser/:id',editUser);

router.get('/deleteUser',deleteUser);

module.exports = router;
