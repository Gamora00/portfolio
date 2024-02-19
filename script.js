const burgerMenu = document.querySelectorAll(".toggleMenu");
const resume = document.querySelector(".btn-resume");
const contactpage = document.querySelector(".btn-contact");
const facebook = document.querySelector(".facebook-logo");
const social = document.querySelectorAll(".social");

burgerMenu.forEach((btn) => {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  });
});

resume.addEventListener("click", () => {
  window.open("./asset/profile.png");
});

contactpage.addEventListener("click", () => {
  location.href = "./#contact";
});

social.forEach((content, index) => {
  const linkContainer = [
    "https://www.facebook.com/jethroalmodielslow",
    "https://github.com/Gamora00",
  ];
  content.addEventListener("click", () => {
    location.href = linkContainer[index];
  });
});
