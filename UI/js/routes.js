var modal = document.getElementById('myModal');

function goto_admin_home(){
    modal.style.display = "none";
    admin_routes('index')
  }
  function goto_admin_edit(){
    modal.style.display = "none";
    admin_routes('edit')
  }
function cancel(){
    modal.style.display = "none";
} 
function confirm(){
    modal.style.display = "none";
}

function admin_routes(location){
    if (location == 'index') {
        window.location.assign("./home.html")
    }
    else if (location == 'edit') {
        window.location.assign("./edit-party.html")
    }

}

function newRoute(usertype) {
    if (usertype == 'User') {
         window.location.assign("./user/index.html")
    }else if (usertype == 'Admin') {
        window.location.assign("./admin/home.html")
    }else if (usertype == 'Politician') {
        window.location.assign("./politician/index.html")
    }
}