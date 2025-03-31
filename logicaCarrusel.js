const carouselTrack = document.querySelector('.carousel-track');
const slides = Array.from(carouselTrack.children);
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselNav = document.querySelector('.carousel-nav');
const dots = Array.from(carouselNav.children);
const navbar = document.querySelector('.navbar'); // Agregamos la selección de la barra de navegación

const slideWidth = slides[0].getBoundingClientRect().width;
let currentSlideIndex = 0;

// Función para mover el carrusel a un slide específico
const moveToSlide = (index) => {
  carouselTrack.style.transform = `translateX(-${index * slideWidth}px)`;
  currentSlideIndex = index;
  updateDots();
  updateButtons();
};

// Función para actualizar los indicadores de navegación (puntos)
const updateDots = () => {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlideIndex);
  });
};

// Función para actualizar la visibilidad de los botones "Anterior" y "Siguiente"
const updateButtons = () => {
  if (currentSlideIndex === 0) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
  }

  if (currentSlideIndex === slides.length - 1) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'block';
  }

  // Ocultar flechas si solo hay una imagen
  if (slides.length <= 1) {
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';
  }
};

// Inicializar el carrusel al cargar la página
if (slides.length > 0) {
  moveToSlide(0);
  updateButtons();
} else {
  const carouselContainer = document.querySelector('.carousel-container');
  if (carouselContainer) {
    carouselContainer.style.display = 'none';
    // Opcional: mostrar un mensaje "No hay imágenes disponibles"
  }
}

// Event listener para el botón "Siguiente"
nextButton.addEventListener('click', () => {
  if (currentSlideIndex < slides.length - 1) {
    moveToSlide(currentSlideIndex + 1);
  }
});

// Event listener para el botón "Anterior"
prevButton.addEventListener('click', () => {
  if (currentSlideIndex > 0) {
    moveToSlide(currentSlideIndex - 1);
  }
});

// Event listener para los indicadores de navegación (puntos)
carouselNav.addEventListener('click', e => {
  if (e.target.classList.contains('carousel-indicator')) {
    const targetIndex = dots.findIndex(dot => dot === e.target);
    if (targetIndex !== -1) {
      moveToSlide(targetIndex);
    }
  }
});

// Evento de scroll para cambiar el estilo del navbar
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
      if (link.textContent === 'Inicio' || link.textContent === 'Servicios' || link.textContent === 'Contacto') {
        link.classList.add('underline-animation'); // Agrega la clase a los enlaces específicos
      }
    });
  });
