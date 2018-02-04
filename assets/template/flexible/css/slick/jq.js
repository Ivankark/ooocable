$slick_slider = $('#slider');

$(window).on('resize', function() {
    if ($(window).width() >= 768) {
      if ($slick_slider.hasClass('slick-initialized')) {
        $slick_slider.slick('unslick');
      }
      return
    }

    if (!$slick_slider.hasClass('slick-initialized')) {
      return $slick_slider.slick({slidesToShow: 1,
  slidesToScroll: 1});
    }
  });