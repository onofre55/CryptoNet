//Getting html elements

const burger = document.querySelector('.burger-nav');
const nav = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');


const navSlide = () => {

    //Toggle nav

    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active')

    });

}

navSlide();