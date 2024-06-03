const images = document.querySelectorAll('.banner img');
let currentImage = 0;

function nextSlide() {
  images[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('active');
}

function prevSlide() {
  images[currentImage].classList.remove('active');
  currentImage = (currentImage - 1 + images.length) % images.length;
  images[currentImage].classList.add('active');
}
