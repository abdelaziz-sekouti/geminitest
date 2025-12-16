document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn) {
        menuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
            const icon = menuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
    }

    const form = document.getElementById('contact-form');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (validateForm()) {
                // Here you can add your form submission logic, e.g., using fetch to send data to a server
                alert('Form submitted successfully!');
                form.reset();
            }
        });
    }


    function validateForm() {
        let isValid = true;
        if (name.value.trim() === '') {
            showError(name, 'Please enter your name.');
            isValid = false;
        } else {
            hideError(name);
        }

        if (email.value.trim() === '' || !isValidEmail(email.value.trim())) {
            showError(email, 'Please enter a valid email address.');
            isValid = false;
        } else {
            hideError(email);
        }

        if (message.value.trim() === '') {
            showError(message, 'Please enter a message.');
            isValid = false;
        } else {
            hideError(message);
        }

        return isValid;
    }

    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        input.classList.add('form-field-error');
        errorElement.innerText = message;
        errorElement.classList.remove('hidden');
    }

    function hideError(input) {
        const errorElement = input.nextElementSibling;
        input.classList.remove('form-field-error');
        errorElement.classList.add('hidden');
    }

    function isValidEmail(email) {
        const re = /^(([^<>()[\\]\\.,;:\s@\"]+(\.[^<>()[\\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\\. [0-9]{1,3}\\. [0-9]{1,3}\\. [0-9]{1,3}\])|(([a-zA-Z\-0-9]+\\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Add some subtle animations on input focus
    const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.transform = 'translateY(-2px)';
        });
        input.addEventListener('blur', () => {
            input.style.transform = 'translateY(0)';
        });
    });

    // Image Slider
    const slider = document.getElementById('slider');
    if (slider) {
        const slides = slider.querySelector('.slides');
        const slide = slider.querySelectorAll('.slide');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');
        const pagination = document.getElementById('pagination');

        let currentIndex = 0;
        let slideInterval;

        function updateSlider() {
            slides.style.transform = `translateX(${-currentIndex * 100}%)`;
            updatePagination();
        }

        function updatePagination() {
            pagination.innerHTML = '';
            slide.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.classList.add('w-3', 'h-3', 'rounded-full', 'transition-colors');
                if (index === currentIndex) {
                    dot.classList.add('bg-white');
                } else {
                    dot.classList.add('bg-gray-400', 'hover:bg-gray-200');
                }
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    updateSlider();
                    resetInterval();
                });
                pagination.appendChild(dot);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slide.length;
            updateSlider();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slide.length) % slide.length;
            updateSlider();
        }

        function startInterval() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }

        if (next) {
            next.addEventListener('click', () => {
                nextSlide();
                resetInterval();
            });
        }

        if (prev) {
            prev.addEventListener('click', () => {
                prevSlide();
                resetInterval();
            });
        }

        updateSlider();
        startInterval();
    }


    // Dynamic Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
