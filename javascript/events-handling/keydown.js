let h1 = document.querySelector("h1");
window.addEventListener("keydown",function(elem){
   h1.textContent = elem.key;   
})