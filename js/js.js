function call(){
    var coll = document.getElementsByClassName("nav-button");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var collapseMe = this.nextElementSibling;
    if (collapseMe.style.display == "block") {
      collapseMe.style.display = "none";
    } else {
        collapseMe.style.display = "block";
    }
  });
}
}