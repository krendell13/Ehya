$(document).ready(function () {
const reqSlider = new Swiper('.req-slider', {
  // Optional parameters
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.req-slider__button--next',
    prevEl: '.req-slider__button--prev',
  },

  

  //Keyboard Navigation
   keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

});

$(document).ready(function () {
const unrelSlider = new Swiper('.unrel-slider', {
  // Optional parameters
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.unrel-slider__button--next',
    prevEl: '.unrel-slider__button--prev',
  },

  

  //Keyboard Navigation
   keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

});
});
});

