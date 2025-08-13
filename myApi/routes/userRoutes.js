

const express = require('express')
const router = express.Router()


//localhost:8000/user
router.get('/', (req, res) => {
    res.send("<h1>User Default Page</h1>")
})

//localhost:8000/user/home
router.get('/home', (req, res) => {
    res.send("<h1>User Home Page</h1>")
})

module.exports = router