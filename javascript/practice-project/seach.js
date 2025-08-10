let users = [
  {
    name: "Muskan Gautam",
    pic: "https://plus.unsplash.com/premium_photo-1690514986888-3499d2560d0d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Computer Science Student",
  },
  {
    name: "Sonal Verma",
    pic: "https://plus.unsplash.com/premium_photo-1747664078250-3208b35504a4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Computer Student",
  },
  {
    name: "Shreya Dixit",
    pic: "https://plus.unsplash.com/premium_photo-1740113056488-af2a0274dd89?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Medical Student",
  },
  {
    name: "Deepika Shukla",
    pic: "https://plus.unsplash.com/premium_photo-1661304627807-d3c9c0739569?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Medical Student",
  },
  {
    name: "Falak ishtiyaaq",
    pic: "https://plus.unsplash.com/premium_photo-1682096206191-c4b25417eea1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Maths Student",
  },
  {
    name: "Priyanshi Gupta",
    pic: "https://plus.unsplash.com/premium_photo-1683133979652-a8f78aeef249?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Diploma Student",
  },
 
];

//Show all the users.
//filter krna har baar input krne per
// show filter users
// Show all the users
function showUsers(arr) {
  const cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML = ""; // clear old content

  if (arr.length === 0) {
    const msg = document.createElement("p");
    msg.textContent = "No user found";
    msg.classList.add("no-user-msg");
    cardsContainer.appendChild(msg);
    return;
  }

  arr.forEach(function (user) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    const content = document.createElement("div");
    content.classList.add("content");

    const h3 = document.createElement("h3");
    h3.textContent = user.name;

    const p = document.createElement("p");
    p.textContent = user.bio;

    content.appendChild(h3);
    content.appendChild(p);

    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    cardsContainer.appendChild(card);
  });
}

// Initial load
showUsers(users);

// Search functionality
let inp = document.querySelector(".inp");
inp.addEventListener("input", function () {
  let newUsers = users.filter((user) =>
    user.name.toLowerCase().startsWith(inp.value.toLowerCase())
  );
  showUsers(newUsers);
});
