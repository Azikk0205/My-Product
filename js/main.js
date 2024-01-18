const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("open");
});


function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

const loading = document.getElementById("loading");
window.addEventListener("load", () => {
  loading.classList.add("loading-none");
});


let mybutton = document.getElementById("myBtn");


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
