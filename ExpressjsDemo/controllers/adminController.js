const UserModel = require('../models/adminModel');

// Admin default controller
const adminDefault = function (request, response) {
    response.render('adminViews/adminDefault');
};

// Admin home controller
const adminHome = function (request, response) {
    console.log("hello");
    response.render('adminViews/home');
};

// Add User controller
const addUser = async function (request, response) {
    console.log(request.fields);
    
    if (request.method === "POST") {
        try {
            const newUser = new UserModel({
                userName: request.fields.userName,   // Make sure body-parser or express.urlencoded() is used
                password: request.fields.password,
                emailId:  request.fields.mailId
            });

            

            if (newUser) {
                return response.render('adminViews/addUser', { msg: "Record added successfully..." });
            } else {
                return response.render('adminViews/addUser', { msg: null });
            }
        } catch (err) {
            console.error("Error saving user:", err);
            return response.render('adminViews/addUser', { msg: "Error adding user." });
        }
    } else {
        return response.render('adminViews/addUser', { msg: null });
    }
};


// Show Users controller
const showUser = async function (request, response) {
    try {
        const userData = await UserModel.find();
        console.log(userData);
        response.render('adminViews/showUsers', { userData });
    } catch (err) {
        console.error("Error fetching users:", err);
        response.render('adminViews/showUsers', { userData: [] });
    }
};

const editUser = async function (request,response) {
    
    if(request.method === "POST"){
     const updated =  await UserModel.findByIdAndUpdate(request.params.id , {password:request
        .fields.pwd , emailId:request.fields.mailId 
       }, {new :true});

       if(updated){
        response.render('adminViews/editUser',{userData:updated,msg:"User Updated succesfully"});
       }
    }else{
       const userData = await UserModel.findOne({_id:request.params.id});
    response.render('adminViews/editUser',{userData,msg:null});
    }
    
}

const deleteUser = async function (request,response) {
   const user = await UserModel.findByIdAndDelete(request.params.id);
   if(user){
    response.redirect('/admin/showUser');
   }
}
// Get admin data controller
const getAdminData = function (request, response) {
    let nm = request.params.adminNm;
    response.send(`<h1 align='center'>Admin ${nm} Page</h1>`);
};

module.exports = {
    adminDefault,
    adminHome,
    getAdminData,
    addUser,
    showUser,
    editUser,
    deleteUser
};
