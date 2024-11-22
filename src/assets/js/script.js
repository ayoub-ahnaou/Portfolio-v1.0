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

import skills from "../data/skills.json" with { type: "json" };
const skillsContainer = document.getElementById("skills-images-container");
let skillElement;
skills.map((skill) => {
    skillElement = document.createElement("img");
    
    skillElement.src = skill.img_url;
    skillElement.alt = skill.img_url;
    skillElement.title = skill.name;
    skillElement.classList = "size-14 object-cover";

    skillsContainer.appendChild(skillElement);
});
