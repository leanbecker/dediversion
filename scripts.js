// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open'); // Optional: for animation effect
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    function showNextSlides() {
        currentIndex++;
        if (currentIndex >= slideCount) {
            currentIndex = 0; // Reiniciar al inicio
        }
        const offset = -currentIndex * 100; // Desplazamiento basado en el índice actual
        slides.style.transform = `translateX(${offset}%)`;
    }

    // Configura el intervalo para cambiar las imágenes automáticamente
    setInterval(showNextSlides, 3000); // Cambiar cada 3 segundos
});