// //Node js is a server side environment built on google chrome's javascript engine (V8 Engine)
// //Node js waas developed by Ryan Dahl in 2009 and its latest version is v20.9.0.
// //Node.js is cross platform (rus on windows linux unix macOs and more)open source backend javascript runtime environment environment that executes javascript code outside a wed browser.
//  //features of node js:
//  // Asyncronous and event driven
//  // Single threaded but highly scalable
//  // No buffering
//  // fast
//  //REPL:- Read , Evaluate , Print, Loop.

//  //important command
//  //.editor = we move in editor mode means we can write normal and multiline code
//  //.break = we break the loop condition
//  //.exit = sell se bahar nikal jate hai
//  //.save = save the file
//  //cd stand for change directory
 
// //  console.log("Heello world !")


//  ///IMPORT
// //  let a = require('./myLib');
// //  console.log(a);


// //   let a = require('./myLib');
// //  console.log(a.name);
// //  console.log(a.age);


// //This is called destructuring in object 
//  let {age , name} = require('./myLib');
//  console.log(age);
//  console.log(name);




//  let a = require('./myLib');
//  console.log(a);


//Array destructuring is happend based on index and position
// let [a,b] = require('./myLib');
// console.log(a);
// console.log(b);

//Function is calling and import here
// let fn = require('./myLib');
// console.log(fn);
// fn[0]();
// fn[1]()


//destructuring in array
// let [fn1,fn2] = require('./myLib');
// console.log(fn);
// fn1();
// fn2()


let {myfun1,myfun2} = require('./myLib');
console.log(myfun1);
console.log(myfun2);
myfun1();
myfun2();

