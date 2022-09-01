const btn = document.getElementById("dark-mode");
const body = document.querySelector("body");

const darkMode = () => {
  body.classList.toggle("bg-white");
  body.classList.toggle("text-black");
  body.classList.toggle("bg-grey-100");
};

btn.addEventListener("click", darkMode);

export default darkMode;

