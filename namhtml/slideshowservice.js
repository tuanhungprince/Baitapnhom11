let currentSlide = 0;
const slides = document.querySelectorAll('.huy');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function moveSlide(step) {
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Hiển thị slide đầu tiên
showSlide(currentSlide);
