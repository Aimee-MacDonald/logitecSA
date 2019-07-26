var menuOpenFlag = false;
var menu = document.getElementById("menu");
function toggleMenu(){
  menuOpenFlag = !menuOpenFlag;

  if(menuOpenFlag){
    menu.style.height = "auto";
  } else{
    menu.style.height = "0";
  }
}
