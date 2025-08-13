const express = require('express')
const formidable = require('express-formidable')
const db = require('./dbConn.js')
const adminModel = require('./models/adminModel.js')
const app= express()

const HOST = 'localhost' //127.0.0.1
const PORT = 8000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(formidable())

const adminRoutes = require('./routes/adminRoutes.js')
app.use('/admin', adminRoutes)

const userRoutes = require('./routes/userRoutes.js')
app.use('/user', userRoutes)

//Login
app.get('/login',(req,res)=>{
    res.render('login',{msg:null})
})
//Login
app.post('/login',async (req,res)=>{

    const user=  await adminModel.findOne({emailId:req.fields.mailId})
    if(user){
    if(user && (user.password === req.fields.pwd)){
        res.redirect(user.hasRole === 'admin'? '/admin' :'/user');
    }
}
    else{
         res.render('login',{msg:'Invalid User Id'})
    }
})



//http://localhost:8000/
app.get('/',(req,res)=>{
    // res.send("<h1>Application is running</h1>")
    let name = "Ritik"
    let msg = "<font size ='4' face ='chiller'>Hello..!</font>"

    let isValid =true
    res.render('default',{name,msg,isValid})
})


//http://localhost:8000/home
app.get('/home',(req,res)=>{

    let fruitNames = ['Apple', 'Banana', 'Mango', 'Orange']

    let obj ={
        name: 'Ritik',
        age: 22,
        city: 'Delhi'
    }

     res.render('home',{fruitNames,obj})
})






app.post('/',(req,res)=>{
    res.send("<h1>Post Request Handler..</h1>")
})





app.listen(PORT,HOST,(err)=>{
    if(err)
        console.log(err);
    else
        console.log(`Server running at http://${HOST}:${PORT}`);
        
})