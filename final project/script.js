//let burgericon = document.querySelector(".burger-icon");
//let navlist = document.querySelector(".nav-container-1-button");
let navlist = document.getElementsByClassName(".nav-container-1-button");
let burgericon = document.getElementsByClassName(".burger-icon");
burgericon.addEventListener("click", () => {
  if (navlist.style == "flex") {
    navlist.style.disply = "none";
  } else {
    navlist.style.disply = "block";
  }
});
