//EXPORT
// module.exports = "Muskan";
//we export string literal.
//jab ham multiple export krte hai jab import krte hai to sirf last vala  export chalega

// let name = "Muskan Gautam";
// let age = 20;
// module.exports = name;
// module.exports = age;



// //ham isme array bhejte hai aur key value pair me answer milta hai
// let myName = "Muskan Gautam";
// let myAge = 20;
// module.exports = [myName,myAge];


//ham isme object bhejte hai aur key value pair me answer milta hai
// let name = "Muskan Gautam";
// let age = 20;
// module.exports = {name,age};



//Function is created and export here
// function myfun1(){
//     console.log("fun 1 is calling ....");
    
// }
// module.exports = myfun1;


// function myfun2(){
//    console.log("fun 2 is calling ...");
// }
// module.exports = myfun2;


// function myfun1(){
//     console.log("fun 1 is calling ....");
    
// }
// function myfun2(){
//    console.log("fun 2 is calling ...");
// }
// module.exports = [myfun1,myfun2];



function myfun1(){
    console.log("fun 1 is calling ....");
    
}
function myfun2(){
   console.log("fun 2 is calling ...");
}
module.exports = {myfun1,myfun2};





