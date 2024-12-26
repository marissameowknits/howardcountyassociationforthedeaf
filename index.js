document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  const nextSlide = () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length; 
    slides[currentSlide].classList.add('active');
  };

  const prevSlide = () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
    slides[currentSlide].classList.add('active');
  };

  document.querySelector('.next-btn').addEventListener('click', nextSlide);
  document.querySelector('.prev-btn').addEventListener('click', prevSlide);

  // Optional: Autoplay
  // setInterval(nextSlide, 5000); // Change interval as needed

  showSlide(currentSlide); 

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active'); 
    });
    slides[index].classList.add('active');
  }
});
