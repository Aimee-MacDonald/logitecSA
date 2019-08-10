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

var lastScroll = 0;
var header = document.getElementById("header");
 document.onscroll = function(e){
  var scrollDelta = window.scrollY - lastScroll;
  lastScroll = window.scrollY;

   if(scrollDelta > 0){
    header.style.marginTop = "-20rem";
  } else {
    header.style.marginTop = "0";
  }
}
