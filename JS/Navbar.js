function NavBarResponsive() {
    var x = document.getElementById("SiteNavBar");
    if (x.classList.contains("NavBarBase")) {
      x.classList.remove("NavBarBase");
      x.classList.add("responsive");
    } else {
      x.classList.remove("responsive");
      x.classList.add("NavBarBase");
    }
}