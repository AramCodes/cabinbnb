//Hamburger menu control
const get = element => document.getElementById(element);

let open = get("menu-btn");
let nav = get("nav");
let exit = get("exit-btn");

open.addEventListener('click', () => {
    nav.classList.add('open-nav');
})

exit.addEventListener('click', () => {
    nav.classList.remove('open-nav');
})

//FAQ Accordion feature
const accordion = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active")

        const panel = this.nextElementSibling;

        if(panel.style.display === "block") {
            panel.style.display = "none"
        }
        else {
            panel.style.display = "block";
        }

    });

    

}