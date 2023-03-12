let mobileBurger = document.querySelector('.header_mobile-burger a');
let headerMenu = document.querySelector('.header_menu');
let heroSection = document.querySelector('.s-hero');
let homeplus = document.querySelector('.s-homeplus');

mobileBurger.addEventListener("click", ()=> {
    mobileBurger.classList.toggle("active");

    if(mobileBurger.classList == "active") {
        headerMenu.classList.add("active");
        heroSection.classList.add("active");
        homeplus.classList.add("active");
    } else {
        headerMenu.classList.remove("active");
        heroSection.classList.remove("active");
        homeplus.classList.remove("active");
    }
});

AOS.init();