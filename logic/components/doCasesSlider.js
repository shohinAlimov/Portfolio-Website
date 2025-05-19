export default function doCasesSlider() {
  return new Swiper('.swiper', {
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.cases__btn-next',
      prevEl: '.cases__btn-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        speed: 500,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        speed: 700,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 24,
        speed: 900,
      }
    }
  });
}
