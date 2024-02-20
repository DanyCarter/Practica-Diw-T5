function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");

    // Cambia el estado de las líneas del botón hamburguesa
    var lines = document.querySelectorAll('.hamburger-button .line');
    lines.forEach(function(line) {
        line.classList.toggle("change");
    });
}

// Cierra el dropdown si el usuario hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.hamburger-button')) {
        var dropdowns = document.getElementsByClassName("dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }

        // Restablece el estado de las líneas del botón hamburguesa
        var lines = document.querySelectorAll('.hamburger-button .line');
        lines.forEach(function(line) {
            line.classList.remove("change");
        });
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
/*         dots[slideIndex-1].className += "active";
    captionText.innerHTML = dots[slideIndex-1].alt;*/ 
}

//! Función para desplazarse suavemente hacia arribA
function scrollToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

//! Muestra u oculta el botón basado en la posición de desplazamiento
window.onscroll = function () {
var scrollButton = document.getElementById("scrollButton");
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
} else {
    scrollButton.style.display = "none";
}
}; 


//!Boton hamburguesa
document.addEventListener('DOMContentLoaded', function () {
const mobileMenuButton = document.getElementById('mobile-menu');
const hamburger = document.querySelector('.hamburger');

mobileMenuButton.addEventListener('click', function () {
    hamburger.classList.toggle('show');
    mobileMenuButton.classList.toggle('active');
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 600) {
        hamburger.classList.remove('show');
        mobileMenuButton.classList.remove('active');
    }
});
});

document.getElementById('btnCat').addEventListener('click', function() {
var adopta = document.getElementById('adopta');
adopta.scrollIntoView({ behavior: 'smooth' });
});

//! Carrusel

window.onload = function () {
// Variables
const IMAGENES = [
    '/assets/img/Carrusel/1.jpg',
    '/assets/img/Carrusel/2.jpg',
    '/assets/img/Carrusel/3.jpg',
    '/assets/img/Carrusel/4.jpg',
    '/assets/img/Carrusel/5.jpg'
    ];

const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
let posicionActual = 0;
let $botonRetroceder = document.querySelector('#retroceder');
let $botonAvanzar = document.querySelector('#avanzar');
let $imagen = document.querySelector('#imagen');
let $botonPlay = document.querySelector('#play');
let $botonStop = document.querySelector('#stop');
let intervalo;

// Funciones

/**
 * Funcion que cambia la foto en la siguiente posicion
 */
function pasarFoto() {
    if(posicionActual >= IMAGENES.length - 1) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    renderizarImagen();
}

/**
 * Funcion que cambia la foto en la anterior posicion
 */
function retrocederFoto() {
    if(posicionActual <= 0) {
        posicionActual = IMAGENES.length - 1;
    } else {
        posicionActual--;
    }
    renderizarImagen();
}

/**
 * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
 */
function renderizarImagen () {
    $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
}

/**
 * Activa el autoplay de la imagen
 */
function playIntervalo() {
    intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
    // Desactivamos los botones de control
    $botonAvanzar.setAttribute('disabled', true);
    $botonRetroceder.setAttribute('disabled', true);
    $botonPlay.setAttribute('disabled', true);
    $botonStop.removeAttribute('disabled');

}

/**
 * Para el autoplay de la imagen
 */
function stopIntervalo() {
    clearInterval(intervalo);
    // Activamos los botones de control
    $botonAvanzar.removeAttribute('disabled');
    $botonRetroceder.removeAttribute('disabled');
    $botonPlay.removeAttribute('disabled');
    $botonStop.setAttribute('disabled', true);
}

// Eventos
$botonAvanzar.addEventListener('click', pasarFoto); 
$botonRetroceder.addEventListener('click', retrocederFoto);
$botonPlay.addEventListener('click', playIntervalo);
$botonStop.addEventListener('click', stopIntervalo);
// Iniciar
renderizarImagen();
}

/*       Modo Oscuro */
        function myFunction() {
            let element = document.body;
            element.classList.toggle("dark");
        } 

