var modal = document.getElementById('myModal');
  
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }

function open_modal(){
  modal.style.display = "block";
}

// your form
var form = document.getElementById("form");

function form_open_modal(event){
  event.preventDefault();
  modal.style.display = "block";
}

// attach event listener
form.addEventListener("submit", form_open_modal, true);