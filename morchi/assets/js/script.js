let mobileBtn = document.querySelector('.mobile-btn a');
let mobileMenu = document.querySelector('.mobile-full-area');
let mobileMenuCloseBtn = document.querySelector('.menu-close a');
let langItem = document.querySelector('.lang-item');

mobileBtn.addEventListener('click', ()=> {
    mobileMenu.classList.toggle('active');
    mobileBtn.classList.toggle('active');
});

langItem.addEventListener('click', ()=> {
    mobileMenu.classList.toggle('active');
});