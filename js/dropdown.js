function showDropdown() {
  var dropdown = document.getElementById("i18n-dropdown")
  var dropbtn = document.getElementById("dropbtn")
  dropdown.classList.toggle("show");
  dropbtn.innerHTML = "&#9650; Language"
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    dropbtn.innerHTML = "&#9660; Language"
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 