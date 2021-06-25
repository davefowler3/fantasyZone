const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

function toggleButton() {
    navList.classList.toggle("show");
}

hamburgerButton.addEventListener("click", toggleButton);



// [START maps_map_simple]
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
// [END maps_map_simple]
