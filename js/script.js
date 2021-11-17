$(function () {

  // Menu opener hamburger
  $('.menu-open, .menu a').click(function () {
    $('.menu-collapse').toggleClass('d-none').css('order', '1');
    $('.menu').toggleClass('menu-opened');
  });

  // Большой слайдер

  $('.big-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-alt-circle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-alt-circle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // слайдер

  $('.reviews-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-alt-circle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-alt-circle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // кнопка наверх

  $(window).scroll(function(){
    if ($(this).scrollTop() > 780) $('.to-up').fadeIn();
    else $('.to-up').fadeOut();
  });
  $('.to-up').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 566);
    return false;
  });

  //scroll

  $(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
        window.location.hash = target;
      });
    });
  });

});
