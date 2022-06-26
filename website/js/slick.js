$('.slick').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 5,
  slidesToScroll: 1,
  cssEase: 'linear',
  autoplay: true,
  ResizeObserverSize: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 580,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 3
      }
    }
  ]
});

$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

$('.mobile-app-slick').slick({
  centerPadding: '0px',
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,

});

$('.tools-carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  cssEase: 'linear',
  autoplay: true,
  ResizeObserverSize: true,
  centerMode: true,
  centerPadding: '10px',
  arrows:false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 481,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
      }
    }
  ]
});