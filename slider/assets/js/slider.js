var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  loop:true,
  grabCursor: true,
  initialSlide:4,
  speed:800,
  
  pagination: {
    el: ".pagination",
    clickable: true,
  },
  navigation: {
     nextEl: '.arrow__right',
     prevEl: '.arrow__left',
   },
 });


 