const mongoose = require('mongoose')
const mongoURI = 'mongodb://localhost:27017/Allenhouse25A_db'

mongoose.connect(mongoURI)
.then(()=>{
    console.log("Connection scuccessfully etablished...");
    
})
.catch((err)=>{
    console.log("Database Connection Failed..");
})

module.exports = mongoose