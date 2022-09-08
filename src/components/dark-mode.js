const btn = document.getElementById("dark-mode");
const body = document.querySelector("body");
const nav = document.querySelector("nav");


const darkMode = () => {
  body.classList.toggle("bg-grey-100");
  
  nav.classList.toggle("text-white");
};

btn.addEventListener("click", darkMode);

export default darkMode;

