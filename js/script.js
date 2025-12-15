document.querySelector('.hamburger-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('hidden');
    if (navLinks.classList.contains('hidden')){

        navLinks.style.marginTop ='0px' ;
    }else{
        navLinks.style.marginTop ='40px' ;
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm()) {
            // Here you can add your form submission logic, e.g., using fetch to send data to a server
            alert('Form submitted successfully!');
            form.reset();
        }
    });

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
        const re = /^(([^<>()[\\]\\.,;:\s@\"]+(\.[^<>()[\\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Add some subtle animations on input focus
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.transform = 'translateY(-2px)';
        });
        input.addEventListener('blur', () => {
            input.style.transform = 'translateY(0)';
        });
    });

    // Image Slider
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const images = document.querySelectorAll('.slider img');

    let currentIndex = 0;
    const slideWidth = images[0].clientWidth;

    function showSlide(index) {
        slider.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showSlide(currentIndex);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Automatic sliding
    setInterval(nextSlide, 5000);

    // Dynamic Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
