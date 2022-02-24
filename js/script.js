var menuBtn = document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

sideNav.style.right = "-300px";

menuBtn.onclick = function(){
    if(sideNav.style.right == "-300px"){
        sideNav.style.right = "0";
        menu.src = "assets/btn/close.png";
    }
    else{
        sideNav.style.right = "-300px";
        menu.src = "assets/btn/menu.png";
    }
}