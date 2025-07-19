const slider = document.getElementById("slider");
let totalSlides = slider.children.length;
let currentIndex = 0;

function slideleft() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  slider.scrollTo({
    left: slider.clientWidth * currentIndex,
    behavior: "smooth",
  });
}

function slideright() {
  currentIndex = (currentIndex + 1) % totalSlides;
  slider.scrollTo({
    left: slider.clientWidth * currentIndex,
    behavior: "smooth",
  });
}

// offertag

const closeoff = document.getElementById("closeoff");
const offerbar = document.getElementById("offerbar");
closeoff.addEventListener("click", function () {
  offerbar.style.display = "none";
});

// side_navrbar

const sidenav = document.getElementById("sidenav");
const menuicon = document.getElementById("menuicon");
const closenav = document.getElementById("closenav");

menuicon.addEventListener("click", function () {
  sidenav.style.right = 0;
});

closenav.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});

// favorite_icon

document.querySelectorAll(".favorite-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("text-red-500"); 
    icon.classList.toggle("fa-solid"); 
    icon.classList.toggle("fa-regular"); 
  });
});
