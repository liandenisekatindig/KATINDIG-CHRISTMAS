const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");

toggleMenu.Menu.addEventlistener("click", () => {
    toggleMenu.classList.toggle("open");
    headerNav.classList.toggle("open");
})
