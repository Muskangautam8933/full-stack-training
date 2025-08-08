let abc = document.querySelector("#abc");

//mouseOver event
// abc.addEventListener("mouseover", function(){
//     abc.style.backgroundColor = "blue";
// })


//mouse out event
// abc.addEventListener("mouseout",function(){
//     abc.style.backgroundColor = "red";
// })

window.addEventListener("mousemove",function(dets){
    abc.style.top = dets.clientY + "px";
    abc.style.left = dets.clientX + "px";
})