function toggleMenu() {
    var menuList = document.getElementsByClassName("menu-list")[0];
    var menuButton = document.getElementById("menu-btn");  
    if(menuList.classList.contains("active")){
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    }else{
      menuList.classList.add("active");
      menuButton.classList.add("active");
    }
}