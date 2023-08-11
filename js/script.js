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
const prevButton = carousel_2.querySelector('.prev-button');
const nextButton = carousel_2.querySelector('.next-button');
let currentImageIndex = 0;

prevButton.addEventListener('click', showPreviousImage);
nextButton.addEventListener('click', showNextImage);

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


