const fs = require("fs");
let str = "A quick brown fox jumps over the lazy dog";

//EXIST OR NOT 
// if (!fs.existsSync("DemoFolder")) {

//IT CREATE FOLDER
//   fs.mkdir("DemoFolder", (err) => {
//     if (err)
//          console.log(err);
//     else 
//         console.log("folder is created");
//   });
//  } else {
//   console.log("Folder already exist");
// }

//REMOVE FOLDER
fs.rmdir('DemoFolder',(err)=>{
    if(err)
        console.log(err);
    else
        console.log("Folder is deleted");
})


//writeFileSync is the synchronous funtion.
// fs.writeFileSync('Sync.txt',str + "\n");

//readFileSync is the synchronous funtion.
// const data = fs.readFileSync('Sync.txt');
// console.log(data.toString());

//appendFileSync is the synchronous funtion.
// fs.appendFileSync('Sync.txt',str+"\n")

// if(fs.existsSync('Sync.txt')){
// //Delete operation it delete file
// fs.unlink('Sync.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("file deleted");
// });
// }
// else{
//     console.log("File not exists....");
// }
