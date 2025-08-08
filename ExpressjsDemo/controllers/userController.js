const userDefault = function(request,response){
    response.send("<h1>User Default page</h1>");
}

const userHome = function(request,response){
    response.send("<h1>User Home Page</h1>")
}

module.exports = {userDefault , userHome};