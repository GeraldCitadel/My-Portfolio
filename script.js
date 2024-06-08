const navBar = document.getElementById("navbar");
const close = document.getElementById("close");
const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("topNav");
const navLink = document.querySelectorAll(".nav-link");

if (navToggle) {
   navToggle.addEventListener("click", () => {
      navBar.classList.add("active");
   })
}

if (close) {
   close.addEventListener("click", () => {
      navBar.classList.remove("active");
   })
}

function linkAction() {
   navLink.forEach(n => n.classList.remove("active"))
   this.classList.add("active")
}

navLink.forEach(n => n.addEventListener("click", linkAction))






// var index = 4;

// show_image(index);

// function show_image(i){
//     index += i;

//     var images = document.getElementsByClassName("clients");

//     for(i = 4; i < images.length; i++)
//     images[i].style.display = "none";

//     if(index > images.length - 1)
//     index = 4;

//     if(index < 4)
//     index = images.length - 1;

//     images[index].style.display = "block";
// }

// Get the button
var scrollButton = document.getElementById("top-btn");


// When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = () => {
   scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const sr = ScrollReveal({
   origin: "top",
   distance: "80px",
   duration: 2000,
   reset: true
})

sr.reveal(".description", {})
sr.reveal(".add1", {delay: 200});
sr.reveal(".add2", {delay: 400})
sr.reveal(".services", {delay: 600})
sr.reveal(".service", {delay: 400})
sr.reveal(".client", {delay: 400})
sr.reveal(".clients", {delay: 200})
sr.reveal(".contact-area", {delay: 400})
sr.reveal(".footer-image", {delay: 200})
sr.reveal(".fa", {delay: 200})
sr.reveal("input", {delay: 200})
sr.reveal("ol", {delay: 200})

