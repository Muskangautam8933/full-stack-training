const UserModel= require('../models/adminModel')

const adminDefault = function(req, res) {
    //res.send("<h1 align = 'center'>Admin Default Page</h1>")
    res.render('adminViews/adminDefault')
}

const adminHome = function(req, res) {

    let userData =[
        {uid:1001, name:'Ritik', age:22, city:'Delhi'},
        {uid:1002, name:'Rahul', age:23, city:'Mumbai'},
        {uid:1003, name:'Amit', age:24, city:'Bangalore'},
        {uid:1004, name:'Sita', age:25, city:'Chennai'},
        {uid:1005, name:'Geeta', age:26, city:'Kolkata'}
    ]
    res.render('adminViews/home.ejs', {userData})

}
const getAdminData = function(req, res) {
 let nm = req.params.adminName
    res.send(`<h1 align = 'center'>Admin Name: ${nm}</h1>`)
}

//localhost:8000/admin/addUser , method = get
const addUser =async function(req,res){

    if(req.method === 'POST'){
        const newUser = new UserModel({
            userName : req.fields.unm,
            password : req.fields.pwd,
            emailId : req.fields.mailId

        })        
        let user = await newUser.save()
        if(user){
            res.json({msg:"Record Added Successfully...",user});
        }
        
    }
    else{
         res.json({msg:null})
    }

    
}

const showUser = async function(req,res){

  const userData = await UserModel.find();
  res.json({userData});
  

}


const editUser = async function(req,res){

    if(req.method === 'POST'){
       const updUser =  await UserModel.findByIdAndUpdate( req.params.id,{password:req.fields.pwd , emailId:req.fields.mailId},{new:true})

        if(updUser)
            res.render('adminViews/editUser',{userData: updUser , msg:"User Updated Successfully..."})
    }
    else{
  const userData = await UserModel.findOne({_id: req.params.id});

  res.render('adminViews/editUser',{userData,msg:null})
    }

}

const deleteUser = async function (req,res) {
  const user = await  UserModel.findByIdAndDelete(req.params.id);
  if(user){
    res.redirect('/admin/showUser')
  }
}


module.exports = {adminDefault, adminHome, getAdminData,addUser,showUser,editUser,deleteUser}