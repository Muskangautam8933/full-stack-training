//Time and Interval.
//setTimeout ek function hota hai basically ham isme batate hai ki hamara code kitne time ke baad chale
// setTimeout(function(){
//   console.log("hello mai hu setTimeOut jo sirf 3 second baad ek baar hi chalega");
// },3000);

// setInterval ek tarah ka function hota hai jo har uss time baad baar baar chalta hai 
// setInterval(function(){
//    console.log("hello  i am set interval jo har 3 second baad chalega");
// },3000)

//Clear time out ek function hota hai jo set time out function ko clear krta hai.
// let timeOut = setTimeout(function(){
//   console.log("hello mai hu setTimeOut jo sirf 3 second baad ek baar hi chalega");
// },3000);

// clearTimeout(timeOut)


// setInterval ko clear karne ke liye ham clearInterval ka use karte hai
// let clearIn = setInterval(function(){
//    console.log("hello  i am set interval jo har 3 second baad chalega");
// },3000)

// clearInterval(clearIn);



let count = 10;

let interval = setInterval(function(){
    if(count >= 0){
        count--;
        console.log(count);
    }else{
        clearInterval(interval);
    }
},2000);