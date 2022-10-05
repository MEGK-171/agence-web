const menuMobile = document.getElementById("menu-mobile");
const navMobile = document.getElementById("nav-mobile");
const root = document.getElementById("root");
const slide = document.getElementById("slide")

const Menu = () => {
    const showMenu = () => {
        navMobile.classList.toggle("hidden");
    };
    const closeMenu = () => {
        navMobile.classList.contains("hidden") ? console.log("true") : navMobile.classList.add("hidden"); 
    };
    menuMobile.addEventListener("click", showMenu);
    root.addEventListener("click", closeMenu);
    slide.classList.toggle("slide");
};

export default Menu;