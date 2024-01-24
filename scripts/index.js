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



