document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const leftArrow = carousel.parentElement.querySelector('.left-arrow');
        const rightArrow = carousel.parentElement.querySelector('.right-arrow');
        let currentIndex = 4;

        function updateCarousel() {
            const offset = -currentIndex * (100 / 4);
            carousel.style.transform = `translateX(${offset}%)`;
        }

        function moveToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        leftArrow.addEventListener('click', () => {
            if (currentIndex === 0) {
                moveToSlide(slides.length - 8);
                carousel.style.transition = 'none';
                updateCarousel();
                setTimeout(() => {
                    carousel.style.transition = 'transform 0.5s ease-in-out';
                    moveToSlide(slides.length - 8);
                }, 0);
            } else {
                moveToSlide(currentIndex - 4);
            }
        });

        rightArrow.addEventListener('click', () => {
            if (currentIndex === slides.length - 4) {
                moveToSlide(4);
                carousel.style.transition = 'none';
                updateCarousel();
                setTimeout(() => {
                    carousel.style.transition = 'transform 0.5s ease-in-out';
                    moveToSlide(4);
                }, 0);
            } else {
                moveToSlide(currentIndex + 4);
            }
        });

        updateCarousel();
    });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

function goToSlide(index) {
    showSlide(index);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});