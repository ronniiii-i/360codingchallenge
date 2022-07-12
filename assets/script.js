const burger = document.querySelector('#burger');
const menu = document.querySelector('.collapse_menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('show');
})