// Toggle between adding and removing the "responsive" class when the user clicks on the hamburger //

function myFunction() {
    var x = document.getElementById("nav-bar");
    if (x.className === "topnav") {
      x.className += "responsive";
    } else {
      x.className = "topnav";
    }
  }