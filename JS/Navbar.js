function NavBarResponsive() {
    var x = document.getElementById("SiteNavBar");
    if (x.className === "NavBarBase") {
      x.className += " responsive";
    } else {
      x.className = "NavBarBase";
    }
  }
