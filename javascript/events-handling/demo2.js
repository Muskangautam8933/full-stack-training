let h1 = document.querySelector("h1");
let select = document.querySelector("select");

select.addEventListener("change",function(elem){
   h1.textContent = `${elem.target.value} Device Selected`;
})

