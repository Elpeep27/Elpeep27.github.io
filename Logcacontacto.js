window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Corregido: usa window.scrollY
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    const contactoSection = document.getElementById('contacto');
    const contactoPosition = contactoSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (contactoPosition < windowHeight * 0.8) {
        contactoSection.classList.add('show');
    }

    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100; // Corregido: usa window.scrollY
    let bgColor;
    if (scrollPercentage < 20) {
        bgColor = '#043434';
    } else if (scrollPercentage < 40) {
        bgColor = '#0c7169';
    } else if (scrollPercentage < 60) {
        bgColor = '#21b1a6';
    } else if (scrollPercentage < 80) {
        bgColor = '#34e0d6';
    } else {
        bgColor = '#e6f4f1';
    }
    document.body.style.backgroundImage = `linear-gradient(to bottom, ${bgColor}, #e6f4f1)`;
});