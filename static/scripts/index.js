var menuOpenFlag = true;
var menu = document.getElementById("menu");
toggleMenu();
function toggleMenu(){
  menuOpenFlag = !menuOpenFlag;

  if(menuOpenFlag){
    menu.style.height = "auto";
  } else{
    menu.style.height = "0";
  }
}
