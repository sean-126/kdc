const viewportSize = window.innerWidth;

if(viewportSize < 800) {
  var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    // centeredSlides: true,
    loop: true,
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //Play
    autoplay: {
      delay: 8000
    }
});
} else {
  var swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 24,
    // centeredSlides: true,
    loop: true,
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //Play
    autoplay: {
      delay: 3000
    }
});
}