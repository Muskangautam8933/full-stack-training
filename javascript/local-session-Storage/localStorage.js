//LocalStorage ke operation:
// Store kaise kare  = setItem
// data fetch kaise kare = getItem
// remove kaise kre = removeItem
// update kaise kare = setItem

//Important : localstorage me data sirf string me save hota hai agar ham array ya object me data dete hai to array ko string me return karega hai aur object ko object object likh kr dega

//localstorage me data ko array me store nhi kr skte isliye usko string bna kr ke use krte hai aur jab local storage se data ko vapas nikalte hai to string milta hai aur string se uske array form me lane ke liye ham "JSON.parse()" ka use krte hai


// JSON.stringify(["muskan","neha","sonal", "shreya"]
// let fr = JSON.parse(localStorage.getItem("friends",));
// console.log(fr);

// JSON.parse();

// 1) How to Store data in localStorage
// localStorage.setItem("name", "Muskan Gautam");


// 1) How to fetch data from localStorage
// let val = localStorage.getItem("name");


// 1) How to remove data from localStorage
// localStorage.removeItem("name");



//update karne ke liye ham set item ka hi use krte hai ye agar value name naam se exist krti hogi to usee override kr dega aur agar nhi hogi to create kr dega
// 1) How to Update data in localStorage
// localStorage.setItem("name", "abcd kumar");