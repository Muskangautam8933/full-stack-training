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
db.Students_Data.insertMany([
  {
    StuName: "Dev",
    StuAge: 20,
    StuEmail: "dev@gmail.com",
    StuSGPA: 8.1,
    StuStream: "AIML",
    StuLang: ["C", "JAVA", "Python"],
  },
  {
    StuName: "Sonal",
    StuAge: 21,
    StuEmail: "sonal@gmail.com",
    StuSGPA: 8.4,
    StuStream: "AIML",
    StuGender: "Female",
    StuLang: ["C", "C++", "Python"],
  },
  {
    StuName: "Sahil",
    StuAge: 22,
    StuEmail: "sahil@gmail.com",
    StuSGPA: 8.3,
    StuStream: "AI",
    StuLang: ["C", "GO"],
    StuLocAdd: {
      House: 420,
      City: "Pune",
      PinCode: 10200,
    },
  },
]);

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
db.createCollection("Sample_Collection");

// 2nd way to create collection
db.users.insertOne({
  _id: 1,
  name: "Muskan Gautam",
  hobbies: ["Coding", "Reading", "Sleeping"],
  score: [80, 90, 100],
  items: [
    { name: "Laptop", price: 5999 },
    { name: "Mobile", price: 5999 },
    { name: "Tablet", price: 5999 },
  ],
});

// _id  in a mongodb createCollection
// in mongodb every document inside a collection has a unique field called _id which serve as a primary key
// this field is automated created by mongodb if not explicitly prvided by the User

// key features of _id:
// 1. _id is unique
// 2. _id is primary key

// how _id is generated = 12 bytes ki hoti hai
// 4 bytes = timestamp
// 5 bytes =  random value
// 4 bytes = incrementing value

//conditions in MongoDB
// 1. $gt : greater than
// 2. $lt : less than
// 3. $gte : greater than or equal to
// 4. $lte : less than or equal to
// 5. $eq : equal to
// 6. $ne : not equal to
// 7. $in : in operator when value matches any of the values in the array
// 8. $nin : not in operator when value does not match any of the values in the array

//equal to
db.Students_Data.find({
  StuName: { $eq: "Muskan" },
});

//Greater than
db.Students_Data.find({
  StuSGPA: { $gt: 8.0 },
});
//in operator ka use jab krte hai ya to hame poora data chaiye ho ya kuch data chaiye ho
db.Students_Data.find({
  StuName: { $in: ["Muskan", "Dev", "Khushi"] },
});

//Logical Operators
// 1. $and : logical and operator
// 2. $or : logical or operator
// 3. $not : logical not operator

//and operator
db.Students_Data.find({
  $and: [{ StuName: { $eq: "Muskan" } }, { StuSGPA: { $gte: 8.0 } }],
});

//or operator
db.Students_Data.find({
  $or: [{ StuName: { $eq: "Muskan" } }, { StuAge: { $gte: 20 } }],
});

//not operator
db.Students_Data.find({
  $and: [
    { StuName: { $eq: "Muskan" } },
    { StuEmail: { $not: { $eq: "demo@gmail.com" } } },
  ],
});

//$exists : this operator is used to check if a field exists in a document
db.Students_Data.find({
  StuRollNo: { $exists: true },
});

//$type : this operator is used to check the type of a field in a document
db.Students_Data.find({
  StuName: { $type: "string" }, //alias value
});
db.Students_Data.find({
  StuName: { $type: 2 }, // byte format
});

//explicit way : ham bhut sari field per ek sath kaam kr skte hai
db.Students_Data.find({
  $and: [
    { StuAge: { $exists: true } },
    { StuName: { $type: "string" } },
    { StuSGPA: { $gt: 8.0 } },
  ],
});

// implicit way : ek hi field per kaam kr skte hai :
db.Students_Data.find({
  StuName: { $exists: true, $type: "string", $gt: "Muskan" },
});

//add date in three ways:
// Date() = Return date and time in a string format
db.DatesDemo.insertMany([
  {
    _id: 1001,
    info: "Date by using Date()",
    DOJ: Date(),
  },
]);

//new Date() = Return date and time in a number format
db.DatesDemo.insertMany([
  {
    _id: 1002,
    info: "Date by using new Date()",
    DOJ: new Date(),
  },
]);

//ISO Date : return date in object format
db.DatesDemo.insertMany([
  {
    _id: 1003,
    info: "Date by using new Date()",
    DOJ: ISODate(),
  },
]);
//it return only date()  function because it is in string format
db.DatesDemo.find({
  DOJ: { $type: "string" },
});

//it return only newdate()  ISODate() function because it is in object format
db.DatesDemo.find({
  DOJ: { $type: "date" },
});

db.DatesDemo.insertMany([
  {
    _id: 1001,
    info: "Date by using Date()",
    DOB: new Date("25-03-2005"),
  },
]);

db.DatesDemo.find(
  { DOJ: { $type: "date" } },
  {
    Date_of_Join: {
      $dateToString: {
        date: "$DOJ",
        format: "%d-%b-%Y %H:%M:%S",
        timezone: "Asia/Kolkata",
      },
    },
  }
);

// Update data in mongodb
// to update document in mongodb we use updateOne() method and updateMany() method
// there are many update operator in mongodb

//upsert: agar mil gya to update kro nhi mila to new record add kro
// $set : this operator is used to update the value of a field in a document
// $inc : this operator is used to increment the value of a field in a document
// $mul : this operator is used to multiply the value of a field in a document
// $min : this operator is used to set the value of a field in a document to the minimum value of the field
// $max : this operator is used to set the value of a field in a document to the maximum value of the field
// $rename : this operator is used to rename a field in a document
// $unset : this operator is used to remove a field from a document

//set operator
db.Students_Data.updateOne(
  { StuName: { $eq: "Muskan" } },
  {
    $set: { StuSGPA: 9.0, StuStream: "EC" },
  }
);

db.Students_Data.updateMany(
  { StuName: { $in: ["Dev", "Sonal"] } },
  {
    $set: { StuSGPA: 9.0, StuStream: "CSE" },
  }
);

//upsert operator: agar mil gya to update kro nhi mila to new record add kro
db.Students_Data.updateOne(
  { StuName: ["Janvi"] },
  {
    $set: { StuSGPA: 9.0, StuStream: "CSE" },
  },
  {
    upsert: true,
  }
);

//rename: rename the field
db.Students_Data.updateOne(
  {
    StuName: "Muskan",
  },
  {
    $rename: {
      StuSGPA: "SGPA",
    },
  }
);

//Delete Record in Mongodb
// deleteOne() : this method is used to delete a single document from a collection
db.Students_Data.deleteOne({
  StuName: { $eq: "Sahil" },
});

// deleteMany() : this method is used to delete multiple documents from a collection
db.Students_Data.updateMany(
  {
    StuName: { $in: ["Dev", "Sonal"] },
  },
  {
    $set: {
      aboutus: "this is about us page",
    },
  }
);

//find perticular sentence related to this keyword it use for exact matching
db.Students_Data.find({ aboutus: /beautiful/ }); //case sesitive
db.Students_Data.find({ aboutus: /beautiful/i }); //case insensitive

db.Students_Data.find({ StuName: /^S/i }); //carrot denote start of the word or string
db.Students_Data.find({ StuName: /nal$/i }); //dollar denote end of the word or string

db.Students_Data.find({ StuName: /^.{1}a/i }); // first character kuch bhi ho but second character a hona chaiye
db.Students_Data.find({ StuName: /^.{2}v/i });
db.Students_Data.find({ StuName: /a.{1}$/i }); //last se third character a hona chaiye a_ _ last me kuch bhi ho skta hai

// Operation in array
// Insert in Array :
//  $push :  this operator is used to add an element this also add duplicate element in the array
//  $addToSet :  this set unique value in the array and not add duplicate element

//push
db.Students_Data.updateOne(
  { StuName: "Dev" }, //selection criteria of document for condition
  { $push: { StuLang: "C++" } } //projection criteria of document to update
);

//addToSet
db.Students_Data.updateOne(
  { StuName: "Dev" },
  { $addToSet: { StuLang: "HTML" } }
);

//pull
db.Students_Data.updateOne({ StuName: "Dev" }, { $pull: { StuLang: "HTML" } });

//find the match value in array:
db.Students_Data.find({
  StuLang: "C",
});

//jis data set me dono value match ho jayegi vo return ho jayega
db.Students_Data.find({
  StuLang: { $all: ["C", "C++"] },
});

//match  with a value equal to value
db.Students_Data.find({ StuLang: { $elemMatch: { $eq: "C++" } } });

// **Update in Array ye c++ ko c plus plus se replace kr dega**
db.Students_Data.updateOne(
  { StuName: "Dev", StuLang: "C++" },
  {
    $set: { "StuLang.$": "C PLUS PLUS" },
  }
);

//2 records milenge
db.Students_Data.find().limit(2);

//first record ko skip kr dega aur baki record dega
db.Students_Data.find().skip(1);

//sort in MongoDB
db.Students_Data.find().sort({ StuName: -1 }); //descending order
db.Students_Data.find().sort({ StuName: 1 }); //ascending order
db.Students_Data.find().sort({ StuName: 1, StuAge: 1 }); //initial StuName ke basis per hoga but jb same honge to  StuAge ke basis per hoga

//it return third highest SGPA
db.Students_Data.find().sort({ StuSGPA: -1 }).skip(2).limit(1);

db.Students_Data.updateOne({ StuName: "Muskan" }, { $set: { StuSGPA: 8.0 } });

//**Aggregate function : kai sare data values ko lena aur single value return krna
// aggregation pipeling are the sequence of processes that are performed on the data to produce the final result
// aggregation operation allow you to group , sort , perform calculation ,analyze data and much more

//Implimentation of Aggregation **//
// db.collection.aggregate([{$match:...},{$group:...},{$sort:...},{$project:...},{$limit:...},{$skip:...}])

db.employees.insertMany([
  {
    _id: 1,
    firstName: "John",
    lastName: "King",
    gender: "male",
    email: "john.king@abc.com",
    salary: 5000,
    department: {
      name: "HR",
    },
  },
  {
    _id: 2,
    firstName: "Sachin",
    lastName: "Tendulkar",
    gender: "male",
    email: "sachin.t@abc.com",
    salary: 8000,
    department: {
      name: "Finance",
    },
  },
  {
    _id: 3,
    firstName: "Virat",
    lastName: "kohli",
    gender: "male",
    email: "kohli@abc.com",
    salary: 7500,
    department: {
      name: "Marketing",
    },
  },
  {
    _id: 4,
    firstName: "Rohini",
    lastName: "Sharma",
    gender: "female",
    email: "roh@abc.com",
    salary: 5000,
    department: {
      name: "HR",
    },
  },
  {
    _id: 5,
    firstName: "Kapil",
    lastName: "Dev",
    gender: "male",
    email: "kapil.d@abc.com",
    salary: 4500,
    department: {
      name: "Finance",
    },
  },
  {
    _id: 6,
    firstName: "Amit",
    lastName: "B",
    gender: "male",
    email: "amit.b@abc.com",
    salary: 7000,
    department: {
      name: "Marketing",
    },
  },
  {
    _id: 7,
    firstName: "Atul",
    lastName: "Gupta",
    gender: "male",
    email: "amitgupta@abc.com",
    salary: 7000,
    department: {
      name: "Technical",
    },
  },
  {
    _id: 8,
    firstName: "Tanisha",
    lastName: "Chauhan",
    gender: "female",
    email: "tanisha@abc.com",
    salary: 6500,
    department: {
      name: "Marketing",
    },
  },
]);
//$project $match
db.employees.aggregate([
  { $project: { firstName: 1, lastName: 1, gender: 1 } },
  { $match: { gender: "female" } },
]);

//$group
db.employees.aggregate([{ $group: { _id: "$gender" } }]);
//department me har ek field me kitne employees hai vo sum kr ke de dega
db.employees.aggregate([
  { $group: { _id: "$department.name", TotalEmployees: { $sum: 1 } } },
]);

//$sort
db.employees.aggregate([
  {
    $group: {
      _id: "$department.name",
      TotalEmployees: { $sum: 1 },
      TotalSalary: { $sum: "$salary" },
      AverageSalary: { $avg: "$salary" },
      MaximumSalary: { $max: "$salary" },
      MinimumSalary: { $min: "$salary" },
    },
  },
  {
    $sort: { TotalSalary: -1 },
  },
]);

//limit
db.employees.aggregate([
  {
    $group: {
      _id: "$department.name",
      TotalEmployees: { $sum: 1 },
      TotalSalary: { $sum: "$salary" },
      AverageSalary: { $avg: "$salary" },
      MaximumSalary: { $max: "$salary" },
      MinimumSalary: { $min: "$salary" },
    },
  },
  {
    $sort: { TotalSalary: -1 },
  },
  {
    $limit: 2,
  },
]);

//$sample : it randaomly selecting a specified number of documents from a collection
db.employees.aggregate([
  {
    $group: {
      _id: "$department.name",
      TotalEmployees: { $sum: 1 },
      TotalSalary: { $sum: "$salary" },
      AverageSalary: { $avg: "$salary" },
      MaximumSalary: { $max: "$salary" },
      MinimumSalary: { $min: "$salary" },
    },
  },
  {
    $sort: { TotalSalary: -1 },
  },
  {
    $limit: 5,
  },
  {
    $sample: { size: 2 },
  },
]);

//$sortByCount: it provide three functionality group , count sort and give result
db.employees.aggregate([
  {
    $sortByCount: "$department.name",
  },
]);

//unwind operator : jb ham iska use krte h to ye hamare record ko split kr dega
db.Students_Data.aggregate([{ $unwind: "$StuLang" }]);
db.Students_Data.aggregate([
  { $unwind: "$StuLang" },
  { $group: { _id: "$StuLang", count: { $sum: 1 } } },
]);

//Restore Database:
//restore database:we can restore database from this command
// mongorestore --db BatchA C:\AllenHouse25_A_DB : it restore whole database
// ' mongorestore --db BatchA --collection DatesDemo C:\AllenHouse25_A_DB\DatesDemo.bson'  : it restore perticular collection

//Export Database:
// mongoexport --version : it return data in JSON format and CSV format:
// --db=AllenHouse25_A_DB --collection=Students_Data --out=C:\\Students_Data.json

//Import Database:
// mongoimport --db=BatchA --collection=Students_Data --file=C:\\Students_Data.json --type=json

//In Binary format(BSON)
// i) Backup : mongodump
// ii) Restore : mongorestore

//2- In JSON/CSV FORMAT
// i) Backup : mongoexport
// ii) Restore : mongoimport

db.Books_data.insertMany([
  [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      genre: "Fiction",
      pages: 281,
      rating: 4.27,
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
      genre: "Dystopian",
      pages: 328,
      rating: 4.17,
    },
    {
      title: "Moby Dick",
      author: "Herman Melville",
      year: 1851,
      genre: "Adventure",
      pages: 585,
      rating: 3.5,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      genre: "Romance",
      pages: 432,
      rating: 4.25,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      genre: "Fiction",
      pages: 180,
      rating: 3.92,
    },
    {
      title: "War and Peace",
      author: "Leo Tolstoy",
      year: 1869,
      genre: "Historical Fiction",
      pages: 1225,
      rating: 4.1,
    },
    {
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      year: 1866,
      genre: "Philosophical",
      pages: 430,
      rating: 4.22,
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
      genre: "Fiction",
      pages: 277,
      rating: 3.81,
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
      genre: "Fantasy",
      pages: 310,
      rating: 4.27,
    },
    {
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      year: 1953,
      genre: "Dystopian",
      pages: 158,
      rating: 3.98,
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      year: 1932,
      genre: "Dystopian",
      pages: 311,
      rating: 3.99,
    },
    {
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      year: 1890,
      genre: "Philosophical",
      pages: 254,
      rating: 4.05,
    },
    {
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      year: 1847,
      genre: "Romance",
      pages: 500,
      rating: 4.25,
    },
    {
      title: "Wuthering Heights",
      author: "Emily Brontë",
      year: 1847,
      genre: "Romance",
      pages: 342,
      rating: 3.89,
    },
    {
      title: "The Grapes of Wrath",
      author: "John Steinbeck",
      year: 1939,
      genre: "Historical Fiction",
      pages: 464,
      rating: 4.2,
    },
    {
      title: "The Old Man and the Sea",
      author: "Ernest Hemingway",
      year: 1952,
      genre: "Fiction",
      pages: 127,
      rating: 3.76,
    },
    {
      title: "Catch-22",
      author: "Joseph Heller",
      year: 1961,
      genre: "Satire",
      pages: 453,
      rating: 3.98,
    },
    {
      title: "The Road",
      author: "Cormac McCarthy",
      year: 2006,
      genre: "Post-Apocalyptic",
      pages: 287,
      rating: 3.93,
    },
    {
      title: "The Fault in Our Stars",
      author: "John Green",
      year: 2012,
      genre: "Young Adult",
      pages: 313,
      rating: 4.2,
    },
    {
      title: "Little Fires Everywhere",
      author: "Celeste Ng",
      year: 2017,
      genre: "Fiction",
      pages: 368,
      rating: 4.19,
    },
    {
      title: "The Night Circus",
      author: "Erin Morgenstern",
      year: 2011,
      genre: "Fantasy",
      pages: 387,
      rating: 4.0,
    },
    {
      title: "The Book Thief",
      author: "Markus Zusak",
      year: 2005,
      genre: "Historical Fiction",
      pages: 552,
      rating: 4.37,
    },
    {
      title: "A Tale of Two Cities",
      author: "Charles Dickens",
      year: 1859,
      genre: "Historical Fiction",
      pages: 489,
      rating: 3.8,
    },
    {
      title: "Les Misérables",
      author: "Victor Hugo",
      year: 1862,
      genre: "Historical Fiction",
      pages: 1463,
      rating: 4.1,
    },
    {
      title: "The Kite Runner",
      author: "Khaled Hosseini",
      year: 2003,
      genre: "Fiction",
      pages: 371,
      rating: 4.21,
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      year: 1988,
      genre: "Philosophical",
      pages: 208,
      rating: 3.87,
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      year: 2011,
      genre: "Non-Fiction",
      pages: 443,
      rating: 4.45,
    },
    {
      title: "Educated",
      author: "Tara Westover",
      year: 2018,
      genre: "Memoir",
      pages: 334,
      rating: 4.47,
    },
    {
      title: "The Immortal Life of Henrietta Lacks",
      author: "Rebecca Skloot",
      year: 2010,
      genre: "Non-Fiction",
      pages: 381,
      rating: 4.0,
    },
    {
      title: "Becoming",
      author: "Michelle Obama",
      year: 2018,
      genre: "Memoir",
      pages: 426,
      rating: 4.56,
    },
    {
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      year: 2018,
      genre: "Fiction",
      pages: 368,
      rating: 4.48,
    },
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      year: 2019,
      genre: "Thriller",
      pages: 336,
      rating: 4.24,
    },
    {
      title: "The Guest List",
      author: "Lucy Foley",
      year: 2020,
      genre: "Thriller",
      pages: 368,
      rating: 4.03,
    },
    {
      title: "Daisy Jones & The Six",
      author: "Taylor Jenkins Reid",
      year: 2019,
      genre: "Fiction",
      pages: 368,
      rating: 4.24,
    },
    {
      title: "Anxious People",
      author: "Fredrik Backman",
      year: 2020,
      genre: "Fiction",
      pages: 300,
      rating: 4.33,
    },
    {
      title: "The Vanishing Half",
      author: "Brit Bennett",
      year: 2020,
      genre: "Fiction",
      pages: 352,
      rating: 4.3,
    },
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      year: 2020,
      genre: "Fantasy",
      pages: 304,
      rating: 4.11,
    },
    {
      title: "Circe",
      author: "Madeline Miller",
      year: 2018,
      genre: "Fantasy",
      pages: 400,
      rating: 4.37,
    },
    {
      title: "Normal People",
      author: "Sally Rooney",
      year: 2018,
      genre: "Fiction",
      pages: 273,
      rating: 4.26,
    },
    {
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      year: 2017,
      genre: "Fiction",
      pages: 400,
      rating: 4.36,
    },
    {
      title: "The City We Became",
      author: "N.K. Jemisin",
      year: 2020,
      genre: "Fantasy",
      pages: 448,
      rating: 4.12,
    },
    {
      title: "Homegoing",
      author: "Yaa Gyasi",
      year: 2016,
      genre: "Historical Fiction",
      pages: 320,
      rating: 4.4,
    },
    {
      title: "The Overstory",
      author: "Richard Powers",
      year: 2018,
      genre: "Fiction",
      pages: 502,
      rating: 4.22,
    },
    {
      title: "Pachinko",
      author: "Min Jin Lee",
      year: 2017,
      genre: "Historical Fiction",
      pages: 496,
      rating: 4.43,
    },
    {
      title: "The Invisible Man",
      author: "H.G. Wells",
      year: 1897,
      genre: "Science Fiction",
      pages: 125,
      rating: 3.61,
    },
    {
      title: "The Secret Garden",
      author: "Frances Hodgson Burnett",
      year: 1911,
      genre: "Children's",
      pages: 331,
      rating: 4.15,
    },
    {
      title: "Anne of Green Gables",
      author: "L.M. Montgomery",
      year: 1908,
      genre: "Children's",
      pages: 320,
      rating: 4.28,
    },
  ],
]);

// 1 Find all books in the dataset.


db.Books_data.find({
    author : {$eq :"George Orwell"}
})

db.Books_data.deleteMany({
    author : {$eq :""}
})