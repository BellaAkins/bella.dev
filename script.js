const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
});
close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun-icon.svg";
  } else {
    icon.src = "images/moon-icon.svg";
  }
};

//To close the navbar when a link is clicked

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const navLinks = navbar.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      //  navbar.style.transform = "translateX(100%)";
      nav.classList.remove("open-nav");
    });
  });
});

//To make contact form work
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  fetch(form.action, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("There was a problem sending your message.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("There was a problem sending your message.");
    });
});
