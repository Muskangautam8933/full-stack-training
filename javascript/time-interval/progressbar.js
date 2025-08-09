let progressbar = document.querySelector(".progress-bar");
let progressText = document.querySelector(".progress-info");
let count = 0
let int  = setInterval(function(){
    if(count < 100){
        count++;
        progressbar.style.width = `${count}%`;
        progressText.textContent = `${count}`;
        
    }else{
        document.querySelector(".name").textContent = "Downloaded Succesfully";
        clearInterval(int);
    }
},20);

















// let count = 0;
// let progress = document.querySelector(".progress-bar");
// let progressText = document.querySelector(".progress-info");

// let int = setInterval(function(){
//    if(count < 100){
//     count++;
//     progress.style.width = `${count}%`;
//     progressText.textContent = `${count}%`;
//    }else{
//     document.querySelector(".name").textContent = "Downloaded";
//     clearInterval(int);   
// }
// },30)

