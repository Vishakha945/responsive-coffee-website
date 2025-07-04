
const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 25,
  slidesPerView: 3,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoint:{
    0:{
        slidesPerView:1
    },
     768:{
        slidesPerView:2
    },
     1024:{
        slidesPerView:3
    }
  }
});