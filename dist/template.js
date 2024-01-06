"use strict";

///////////////////
// Write Your Generator Function Here

var sidebarBox = document.querySelector("#box");
var sidebarBtn = document.querySelector("#btn");
var pageWrapper = document.querySelector("#main-content");

sidebarBtn.addEventListener("click", function (event) {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
    sidebarBox.classList.remove("active");
  } else {
    this.classList.add("active");
    sidebarBox.classList.add("active");
  }
});

pageWrapper.addEventListener("click", function (event) {
  if (sidebarBox.classList.contains("active")) {
    sidebarBtn.classList.remove("active");
    sidebarBox.classList.remove("active");
  }
});

window.addEventListener("keydown", function (event) {
  if (sidebarBox.classList.contains("active") && event.keyCode === 27) {
    sidebarBtn.classList.remove("active");
    sidebarBox.classList.remove("active");
  }
});
// let fontOne = document.querySelector(".font-one");
// let fontTwo = document.querySelector(".font-two");
// let fontThree = document.querySelector(".font-three");
// let fontfour = document.querySelector(".font-four");
// let fontfive = document.querySelector(".font-five");
// let fontsix = document.querySelector(".font-six");
// let exampleshow = document.querySelector(".example-show");

// fontOne.addEventListener("click", function fontone() {
//   exampleshow.classList.remove(
//     "franklin",
//     "georgia",
//     "Gill-Sans",
//     "Trebuchet-MS",
//     "Times-New-Roman"
//   );
//   exampleshow.classList.add("sans-serif");
// });
// fontTwo.addEventListener("click", function fonttwo() {
//   exampleshow.classList.remove(
//     "sans-serif",
//     "georgia",
//     "Gill-Sans",
//     "Trebuchet-MS",
//     "Times-New-Roman"
//   );
//   exampleshow.classList.add("franklin");
// });
// fontThree.addEventListener("click", function fontthree() {
//   exampleshow.classList.remove(
//     "sans-serif",
//     "franklin",
//     "Gill-Sans",
//     "Trebuchet-MS",
//     "Times-New-Roman"
//   );
//   exampleshow.classList.add("georgia");
// });
// fontfour.addEventListener("click", function fontfour() {
//   exampleshow.classList.remove(
//     "sans-serif",
//     "franklin",
//     "Trebuchet-MS",
//     "georgia",
//     "Times-New-Roman"
//   );
//   exampleshow.classList.add("Gill-Sans");
// });
// fontfive.addEventListener("click", function fontfive() {
//   exampleshow.classList.remove(
//     "sans-serif",
//     "franklin",
//     "Gill-Sans",
//     "georgia",
//     "Times-New-Roman"
//   );
//   exampleshow.classList.add("Trebuchet-MS");
// });
// fontsix.addEventListener("click", function fontsix() {
//   exampleshow.classList.remove(
//     "sans-serif",
//     "franklin",
//     "Gill-Sans",
//     "Trebuchet-MS",
//     "georgia"
//   );
//   exampleshow.classList.add("Times-New-Roman");
// });

let goToTop = document.querySelector(".gototop");

window.onscroll = function () {
  if (window.scrollY >= 1000) {
    goToTop.style.display = "block";
  }
  if (window.scrollY <= 1000) {
    goToTop.style.display = "none";
  }
};

goToTop.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
