let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const carousel = document.querySelector(".carousel");

function showSlides(index) {
  if (index >= slides.length) currentIndex = 0;
  if (index < 0) currentIndex = slides.length - 1;

  slides.forEach(slide => slide.style.display = "none");
  slides[currentIndex].style.display = "block";
}

// botões
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlides(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlides(currentIndex);
});

// troca automática
let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlides(currentIndex);
}, 5000);

// pausa no hover
carousel.addEventListener("mouseenter", () => clearInterval(autoSlide));
carousel.addEventListener("mouseleave", () => {
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlides(currentIndex);
  }, 5000);
});

// iniciar
showSlides(currentIndex);

// forms
document.querySelectorAll('input[type=number]').forEach(input => {
  if (input.value === '0') input.value = '';
});
