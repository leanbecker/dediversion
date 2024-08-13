// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open'); // Optional: for animation effect
    });
});
    
    
    document.addEventListener("DOMContentLoaded", function() {
        const slidesContainer = document.querySelector('.slides');
        const slides = document.querySelectorAll('.slide');
        const slideCount = slides.length;
        const slidesToShow = 2; // Número de imágenes visibles a la vez
        const slideWidth = 200 / slidesToShow;
        
        let currentIndex = 0;
        let totalSlides = Math.ceil(slideCount / slidesToShow);
                                    
        function updateSlides() {
            const offset = - (currentIndex * slideWidth) + '%';
            slidesContainer.style.transform = `translateX(${offset})`;
        }
        
        function goToNextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlides();                     
        }
        
        // Configura el intervalo para el cambio automático
        setInterval(goToNextSlide, 3000); // Cambia cada 3 segundos
        
        // Inicializa la vista
        updateSlides();
    });
    
