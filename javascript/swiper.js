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

console.log('working')