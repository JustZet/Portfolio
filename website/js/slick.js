import "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
import "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"

$('.slick').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
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
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});