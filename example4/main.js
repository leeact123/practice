const toogleBtn = document.querySelector(".nav-bar__toogleBtn"); 
const menu = document.querySelector(".nav-bar__menu");
const icons = document.querySelector(".nav-bar__icons");

toogleBtn.addEventListener("click", ()=>{
    menu.classList.toggle("active");
    icons.classList.toggle("active");
});

