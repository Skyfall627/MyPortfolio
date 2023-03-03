/* Navigation menu animation
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
    

*/

// Next Project animation 

function switchDiv() {
  var activeDiv = document.querySelector(".active");
  var nextDiv = activeDiv.nextElementSibling;
  
  // If there's no next sibling, go back to the first div
  if (!nextDiv) {
    nextDiv = document.getElementById("project1");
  }

  // Toggle the active and hidden classes for the two divs
  activeDiv.classList.remove("active");
  activeDiv.classList.add("hidden");
  nextDiv.classList.remove("hidden");
  nextDiv.classList.add("active");
}


// Previous Project animation

function previousDiv() {
  var activeDiv = document.querySelector(".active");
  var div = activeDiv.previousElementSibling;

  // If there's no previous sibling or if it is the .project class, go to the last div
  if (!div || div.classList.contains("null")) {
    div = document.getElementById("project3");
  }

  // Toggle the active and hidden classes for the two divs
  activeDiv.classList.remove("active");
  activeDiv.classList.add("hidden");
  div.classList.remove("hidden");
  div.classList.add("active");
}


/* Function to make corners transparent on scroll
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


//  make the page scroll down after clicking the arrow
function scrollToId(id) {
  var element = document.getElementById(id);
  if (element) {
    var offset = element.offsetTop;
    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  }
}

*/




