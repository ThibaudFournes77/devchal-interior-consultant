function myFunction() {
    var x = document.querySelector("#topnav");
    var icon = document.querySelector(".icon a");
    if (x.className === "topnav") {
      x.className += " responsive";
      icon.innerHTML = "X";
    } else {
      x.className = "topnav";
      icon.innerHTML = "&#9776;";
    }
}