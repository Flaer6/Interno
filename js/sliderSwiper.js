'use strict'

console.log('good')

const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 100,
  centeredSlides: true,
  centeredSlidesBounds: true,
  autoplay: {
    
    disableOnInteraction: false, 
  },
  speed: 800,
});