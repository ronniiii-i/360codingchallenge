const burger = document.querySelector('#burger');
const menu = document.querySelector('.collapse_menu');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

burger.addEventListener('click', () => {
    menu.classList.toggle('show');
    line2.classList.toggle('disappear');
    line1.classList.toggle('rot1');
    line3.classList.toggle('rot2');
})