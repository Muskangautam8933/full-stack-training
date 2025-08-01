//File Handling = is used to store data 

// const fs = require('fs');
// //Write operation
// let str = "A quick brown fox jumps over the lazy dog";
// fs.writeFile('Test.txt',str + "\n", (err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("Data Save")
// })

// const fs = require('fs');
// let str = "A quick brown fox jumps over the lazy dog";
//Read operation in a file
// fs.readFile('Test.txt',(err,data)=>{
//     if(err) 
//         console.log("Erroe Occured.. "+ err);
//     else 
//         console.log(data.toString());
// })

const fs = require('fs');
let str = "A quick brown fox jumps over the lazy dog";
// Append Operation
fs.appendFile('Test.txt',str + "\n" , (err)=>{
    if(err)
        console.log(err);
    else
        console.log("Data append in file");
})