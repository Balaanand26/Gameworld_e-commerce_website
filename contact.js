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
