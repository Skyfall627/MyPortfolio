const container = document.querySelector(".container");

    // Navigation menu animation

function openNav() {
  var burger = document.getElementById("Hamburger");
  burger.style.width = "100%";
  burger.style.height = "60px";
}

function closeNav() {
  var burger = document.getElementById("Hamburger");
  burger.style.width = "0";
  burger.style.height = "0";
}
    
// Function to make corners transparent on scroll
function fadeOut() {
  var image1 = document.getElementById("corner1");
  var image3 = document.getElementById("corner3");
  var intro =  document.getElementById("introduction");
  var opacity = 1 - window.pageYOffset/500;
  image1.style.opacity = opacity.toString();
  image3.style.opacity = opacity.toString();
  intro.style.opacity = opacity.toString();
}

// Function to make corners opaque on scroll
function fadeIn() {
  var image2 = document.getElementById("corner2");
  var image4 = document.getElementById("corner4");
  var project = document.getElementById("projects");
  var opacity = window.pageYOffset/500;
  image2.style.opacity = opacity.toString();
  image4.style.opacity = opacity.toString();
  project.style.opacity = opacity.toString();
}

window.addEventListener("scroll", function() {
  fadeOut();
  fadeIn();
});