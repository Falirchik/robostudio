$(function() {
	var pull 		= $('#pull');
	menu 		= $('nav ul');
	menuHeight	= menu.height();
    $(pull).on('click', function(e) {
	    e.preventDefault();
	    menu.slideToggle();
    });
    $(window).resize(function(){
    		var w = $(window).width();
    		if(w > 320 && menu.is(':hidden')) {
    			menu.removeAttr('style');
    		}
  	});
});


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



// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton_slider = document.querySelector('.prev-button_slider');
const nextButton_slider = document.querySelector('.next-button_slider');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton_slider.addEventListener('click', showPreviousSlide);
nextButton_slider.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();