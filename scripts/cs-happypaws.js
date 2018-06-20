

// Link to Personas
function openWinPersonas() {
    window.open("assets/cs-happypaws/personas.pdf");
}

// Sticky Menu
window.onscroll = function() {myFunction()};

var stickymenu = document.getElementById("stickymenu");
var sticky = stickymenu.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    stickymenu.classList.add("sticky")
  } else {
    stickymenu.classList.remove("sticky");
  }
}

