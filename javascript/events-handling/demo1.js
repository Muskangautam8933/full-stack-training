//browser pe koi bhi harkat hogi event raise ho jayega
//kuch screen per ho aur apko  reaction dena ho to us waqt aapko event handle karna ana chaiye
//event matlb hota hai kuch action hua
//event listener ka matlbhai koi action ka reaction diya
// select the paragraph
//realize karo kya hoga paragraph per click krne per
//add karenge event listener
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let inp = document.querySelector("input");

//click event
h1.addEventListener("click", function () {
  h1.style.color = "red";
});

//double click event
function dblclick() {
  p.style.color = "green";
}
p.addEventListener("dblclick", dblclick);
p.removeEventListener("dblclick", dblclick);

//input event
inp.addEventListener("input", function (val) {
  if (val.data != null) {
    console.log(val.data);
  }
});

//change event:
//change event tb chalta hai jab apko koi input, select ya text area me koi change ho jaay








