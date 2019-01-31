var modal = document.getElementById('myModal');
function close_modal(){
    var e = document.getElementById("ddlViewBy");
    var strUser = e.options[e.selectedIndex].value;
    modal.style.display = "none";
    newRoute(strUser)
}   
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
function open_modal(){
    modal.style.display = "block";
  }
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }
function newRoute(usertype) {
    if (usertype == 'User') {
         window.location.assign("./index.html")
    }else if (usertype == 'Admin') {
        window.location.assign("./index.html")
    } else if (usertype == 'Politician') {
        window.location.assign("./index.html")
    }
}