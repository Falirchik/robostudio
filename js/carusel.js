const carousel_2 = document.querySelector('.carousel_2');
const images = carousel_2.querySelectorAll('img');
const prevButton_carusel = carousel_2.querySelector('.prev-button_carusel');
const nextButton_carusel = carousel_2.querySelector('.next-button_carusel');
let currentImageIndex = 0;

prevButton_carusel.addEventListener('click', showPreviousImage);
nextButton_carusel.addEventListener('click', showNextImage);

function showPreviousImage() {
  images[currentImageIndex].classList.remove('current');

  if (currentImageIndex === 0) {
    currentImageIndex = images.length - 1;
  } else {
    currentImageIndex--;
  }

  images[currentImageIndex].classList.add('current');
}

function showNextImage() {
  images[currentImageIndex].classList.remove('current');

  if (currentImageIndex === images.length - 1) {
    currentImageIndex = 0;
  } else {
    currentImageIndex++;
  }

  images[currentImageIndex].classList.add('current');
}