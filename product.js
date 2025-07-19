const checkboxes = document.querySelectorAll(".filter-checkbox");
const cards = document.querySelectorAll(".product-card");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const selected = Array.from(checkboxes)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value);

    cards.forEach((card) => {
      const categories = card.getAttribute("data-category")?.split(",") || [];
      const isMatch =
        selected.length === 0 ||
        selected.some((value) => categories.includes(value));

      if (isMatch) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// searchbar

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".product-card");

  cards.forEach((card) => {
    const title = card.querySelector("h2").textContent.toLowerCase();
    if (title.includes(keyword)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
});


// offertag

const closeoff = document.getElementById("closeoff")
const offerbar = document.getElementById("offerbar")
closeoff.addEventListener("click",function(){
  offerbar.style.display = "none"
})


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
