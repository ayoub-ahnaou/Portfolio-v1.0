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


import socials from "../data/social.json" with { type: "json" };
const socialContainer = document.getElementById("social-container");
socials.map((social) => {
    socialContainer.innerHTML += `
            <div
              class="bg-lightBg shadow-md rounded-md w-1/3 max-md:w-full p-4 flex flex-col max-md:flex-row max-md:items-center justify-between"
            >
                <div class="flex gap-4 flex-col max-md:flex-row max-md:items-center">
                    <img
                        src=${social.img_url}
                        alt=${social.name}
                        class="img-effect size-12 max-md:size-16"
                    />
                    <div class="flex flex-col">
                        <p class="text-sm text-primaryTextColor">${social.name}</p>
                        <p class="text-secondTextColor text-base font-mono">${social.account}</p>
                    </div>
                </div>
                <div class="">
                    <button class="primary-btn-small">FOLLOW</button>
                </div>
            </div>
    `;
});


import projects from "../data/projects.json" with { type: "json" };
const projectsContainer = document.getElementById("projects-container");
projects.map((project) => {
    projectsContainer.innerHTML += `
        <div class="w-1/2 max-md:w-full bg-lightBg shadow-md rounded-md flex flex-col gap-2 p-4">
            <a href="${project.demo}" target="_blank" class="center">
                <img
                src="${project.imgurl}"
                alt=${project.title}
                class="img-effect border-2 border-black rounded-md h-[270px] max-md:h-auto w-full"
                />
            </a>
            <div class="flex justify-between items-center">
              <span>${project.title}</span>
              <div class="flex gap-2">
                    <a href="${project.repo}" target="_blank">
                        <img
                        src="assets/images/icons/github.svg"
                        class="size-6 cursor-pointer"
                        alt=""
                        />
                    </a>
                    <a href="${project.demo}" target="_blank">
                        <img
                        src="assets/images/icons/link-external.svg"
                        class="size-6 cursor-pointer"
                        alt=""
                        />
                    </a>
                </div>
            </div>
            <span class="font-[Comfortaa] flex-1">
              ${project.description}
            </span>
            <div id="${project.id}" class="flex gap-1 mt-8"></div>
        </div>
    `;
    project.technologies.forEach((tech) => {
        document.getElementById(project.id).innerHTML += `
            <span class="bg-secondTextColor text-white px-4 py-1 font-mono rounded-md">${tech}</span>
        `;
    });
});
