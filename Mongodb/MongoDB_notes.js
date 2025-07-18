//ALL MONGODB QUERIES:-

//To Show All Databases
// show dbs
//show database


//To Create Database
// use database_name : if database is exist then it will use it otherwise create new database
// show databases : again use show database to check that database is create or not
// but this is non existing database jab tk ham usmka collection nhi banayenge tab tak iska physical existence nhi hoga


// To Create a new collection
//db.createCollection("Students_Data") : it will create a collection.
// show collections : again use show collections to check that collection is create or not now database is created.
//"db" in mongoDb : In mongodb db is a built in global object in mongo shell (db referse to currently selected database).


//Insert one new Document/data in json format
// db.Students_Data.insertOne({
//     StuName:"Muskan",
//     StuAge:20,
//     StuEmail:"demo@gmail.com",
//     StuSGPA:8.0
// })


//Select data from collection : it will show inserted data
// db.Students_Data.find()


//Insert More than one  Document/data in json format
// db.Students_Data.insertMany([
//     {
//         StuName:"Dev",
//         StuAge:20,
//         StuEmail:"dev@gmail.com",
//         StuSGPA:8.1,
//         StuStream:"AIML",
//         StuLang:["C","JAVA","Python"]
//     },
//     {
//         StuName:"Sonal",
//         StuAge:21,
//         StuEmail:"sonal@gmail.com",
//         StuSGPA:8.4,
//         StuStream:"AIML",
//         StuGender:"Female",
//         StuLang:["C","C++","Python"]
//     },
//     {
//         StuName:"Sahil",
//         StuAge:22,
//         StuEmail:"sahil@gmail.com",
//         StuSGPA:8.3,
//         StuStream:"AI",
//         StuLang:["C","GO"],
//         StuLocAdd:{
//             House:420,
//             City:"Pune",
//             PinCode:10200
//         }
        
//     }
   
// ])


//db.Students_Data.find().pretty() : ye data ko format kr dega prettier ki tarah.
// db.Students_Data.find().count() : ye jitne document hamne add kiye honge usko count krke bta dega.

// find() = to select data from a collectiopn in MongoDB we can use the find() method
// db.Collection_name.find(selection_criteria,projection)
// selection_criteria = to return all document in a collection use empty document({}) the type of this parameter is document

//projection = StuName:1 1 ka mtlb hai ki include karo 0 ka mtlb hai exculede kro 
// projection = to return only specified fields in a document use empty document({}) the type of this parameter is document
// db.Students_Data.find({} ,{StuName:1 , StuEmail:1 })
// db.Students_Data.find({} ,{StuName:1 , StuLocAdd:1 })
// db.Students_Data.find({} ,{StuName:1 , StuLocAdd:1 , StuAge:0})  :error dega kyuki hamne already bataya hai ki sirf do field dega to vo automatic sirf do field hi dega baki sb ko exlude kr dega
// db.Students_Data.find({} ,{StuName:1 , _id:0})  : bas ham id me hi 0 lga skte hai


// projection: this parameter is an object that describe which fields to include in the result both fine methods accepts a second parameter called projection 
// this parameter is optional


//agar hame nested data ko show krna hai to single code ke likhna haugi
// db.Students_Data.find({} ,{StuName:1 , StuEmail:1, StuLocAdd.HouseNo:1 })  give error
// db.Students_Data.find({} ,{StuName:1 , StuEmail:1, 'StuLocAdd.House':1 }) : this will work


//Operator in MongoDB
