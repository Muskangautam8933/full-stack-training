
const express = require('express');
const formIdableMiddleware = require("express-formidable");

const dbConn = require('./database/dbConn');
dbConn();
const adminModel = require('./models/adminModel');
const app = express();
app.use(formIdableMiddleware());


const HOST = 'localhost'  //127.0.0.1
const PORT = 8000;

app.set('view engine','ejs');
app.use(express.static('public'))

//import admin routes
const adminRoutes = require('./routes/adminRoutes');
app.use("/admin",adminRoutes);


const userRoutes = require('./routes/userRoutes');
app.use("/user",userRoutes);
 

app.get('/login', async (request, response) => {
    const users = await adminModel.findOne({ emailId: request.fields.mailId }); 
    if(users){
       if(users && (users.password === request.fields.password)){
        response.redirect(users.hasRole === 'admin'?'/admin': '/user');
       }
    }else{
       response.render('login', { msg: "invalid user id" });
    }
    
});






// we have to handle request method and url
app.get('/',(request,response)=>{
    // response.send("<h1>Application Default Page</h1>");
    let name = "Sachin";
    let msg = "<font size='4' face='chiller'>Hello </font>";
    let isValid = false;
    response.render('default',{name ,msg ,isValid});
})





app.get('/home',(resquest,response)=>{
    // response.send("<h1>Application Home Page</h1>");
    let fruitNames = ["Apple", "Mango", "Banana", "PineApple"];
    let userData = {uid : 1001 , unm:'virat', gender:'male'}
    response.render('home',{fruitNames,userData});
})

app.get('/about',(request,response)=>{
    response.send("<h1>This is About Page</h1>");
})



app.post('/',(request,response)=>{
    response.send("post request handle");
})

//Server listen
app.listen(PORT ,HOST, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Server running at http://${HOST}:${PORT}`);
    }
})