(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav-mobile');
    const menuCloseItem = document.querySelector('.mobile__nav-close');
    const menuLinks = document.querySelectorAll('.mobile__link');
    burgerItem.addEventListener('click', () => {
       menu.classList.add('nav-mobile_active');
    });
    menuCloseItem.addEventListener('click', () => {
       menu.classList.remove('nav-mobile_active');
    });
 
    if (window.innerWidth < 1023) {
       for (let i = 0; i < menuLinks.length; i++) {
          menuLinks[i].addEventListener('click', () => {
             menu.classList.remove('nav-mobile_active');
          })
       }
    };
 }());

(function () {
    const costRowFirst = document.querySelector('.cost__row.first');
    const costBurgerFirst = document.querySelector('.burger-first');    
    const costMobileFirst = document.querySelector('.mobile-first');
    costRowFirst.addEventListener('click', () => {
        costBurgerFirst.classList.toggle('burger-first_active');
        costMobileFirst.classList.toggle('mobile-first_active');
    });

    const costRowSecond = document.querySelector('.cost__row.second');
    const costBurgerSecond = document.querySelector('.burger-second');
    const costMobileSecond = document.querySelector('.mobile-second');
    costRowSecond.addEventListener('click', () => {
        costBurgerSecond.classList.toggle('burger-second_active');
        costMobileSecond.classList.toggle('mobile-second_active');
    });
    
    const costRowThird = document.querySelector('.cost__row.third');
    const costBurgerThird = document.querySelector('.burger-third');
    const costMobileThird = document.querySelector('.mobile-third');
    costRowThird.addEventListener('click', () => {
        costBurgerThird.classList.toggle('burger-third_active');
        costMobileThird.classList.toggle('mobile-third_active');
    });

    const costRowFourth = document.querySelector('.cost__row.fourth');
    const costBurgerFourth = document.querySelector('.burger-fourth');
    const costMobileFourth = document.querySelector('.mobile-fourth');
    costRowFourth.addEventListener('click', () => {
        costBurgerFourth.classList.toggle('burger-fourth_active');
        costMobileFourth.classList.toggle('mobile-fourth_active');
    });

    const costRowLast = document.querySelector('.cost__row.last');
    const costBurgerFifth = document.querySelector('.burger-fifth');
    const costMobileFifth = document.querySelector('.mobile-fifth');
    costRowLast.addEventListener('click', () => {
        costBurgerFifth.classList.toggle('burger-fifth_active');
        costMobileFifth.classList.toggle('mobile-fifth_active');
    });
}());

$(function() {
    $('.reviews__slider').owlCarousel({
       loop:true,
       margin:10,
       nav:true,
       dots: false,
       navText: ['<img src="img/arrow_inactive.svg">','<img src="img/arrow_active.svg">'],
       responsive:{
           0:{
               items:1
           },
           850:{
               items:2
           },
           1000: {
               items:2
           },
           1230: {
               items:3
           }
       }
   });
 });

$(function() {
   $('.customers__slider').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      navText: ['<img src="img/arrow_normal-l.svg">','<img src="img/arrow_normal-r.svg">'],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });
});