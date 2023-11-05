$(function(){
  $('.header-slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg" alt="#"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg" alt="#"></button>',fade: true
  });


  $('.product__name').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.product__content',
    vertical: true,
  });
  $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    fade: true,
  });

});