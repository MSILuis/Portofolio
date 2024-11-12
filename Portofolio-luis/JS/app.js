let menu = document.querySelector('#mobile-menu')
let menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-activo')
    menuLinks.classList.toggle('activo')
})