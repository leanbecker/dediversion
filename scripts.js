// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open'); // Optional: for animation effect
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const slidesContainer = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    const slidesToShow = 3; // Número de imágenes que se muestran a la vez
    const slideWidth = 33.3333; // Cada slide ocupa el 33.33% del contenedor
    const totalGroups = Math.ceil(totalSlides / slidesToShow); // Número total de grupos

    // Ajusta el ancho del contenedor para abarcar todas las imágenes
    slidesContainer.style.width = `${slideWidth * totalSlides}%`;

    let currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalGroups; // Ciclo continuo
        const offset = -currentIndex * (slideWidth * slidesToShow); // Ajusta el desplazamiento
        slidesContainer.style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextSlide, 3000); // Cambia cada 3 segundos
});
