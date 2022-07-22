// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => { 
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});


//Nav hamburgerburger selection
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");


burger.addEventListener("click", () => {
    ul.classList.toggle("show");
})

// Close hamburger menu when a link is clicked

// Select nav links

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>link.addEventListener("click", () => {
    ul.classList.remove("show");
}));


/** Contact Form js */
let resetButton = document.getElementById('reset');
let form = document.getElementById('form');

resetButton.addEventListener('click', function() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    name.value = '';
    email.value = '';
    message.value = '';

  });
