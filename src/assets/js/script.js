const menu = document.querySelector(".menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

menuIcon.onclick = function() {
    menu.style.top = "0%";
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
}
closeIcon.onclick = function() {
    menu.style.top = "-500%";
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
}