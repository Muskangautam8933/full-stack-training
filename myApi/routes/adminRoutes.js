
const express = require('express')
const router = express.Router()
const {adminDefault, adminHome,addUser,showUser,editUser,deleteUser} = require('../controllers/adminController')


//localhost:8000/admin
router.get('/', adminDefault)

//localhost:8000/admin/home
router.get('/home', adminHome)


//localhost:8000/admin/addUser
router.get('/addUser',addUser)
router.post('/addUser',addUser)

//localhost:8000/admin/showUser
router.get('/showUser',showUser)

//localhost:8000/admin/editUser
router.get('/editUser/:id',editUser)
router.post('/editUser/:id',editUser)

//localhost:8000/admin/deleteUser
router.get('/deleteUser/:id',deleteUser)




module.exports = router