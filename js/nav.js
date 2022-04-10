const nav = document.querySelector('.menu-navegación-superior') // creamos la constante sobre el menu-navegacion-superior
window.addEventListener('scroll', fixNav) //evento al bajan con el srcol

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active') //activa la clase
    } else {
        nav.classList.remove('active')
    }
}

