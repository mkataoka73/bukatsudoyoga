$(document).ready(function(){
  $('.slider').slick({
    appendDots: $('.dots'),
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    speed: 2000,
    prevArrow: '<img src="{{ "/images/slick_icon/left-chevron.svg" | relative_url }}" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="{{ "/images/slick_icon/right-chevron.svg" | relative_url }}" class="slide-arrow next-arrow">'
  });
});
