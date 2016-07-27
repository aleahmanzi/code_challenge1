$(document).ready(function(){
  $('a[href^="#"]').click(function(e) {
    e.preventDefault();
    var target = this.hash, 
    $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function() {
      window.location.hash = target;
    });
  });
});

/// - slower scroll animation

$(window).scroll(function () {
  console.log($(window).scrollTop())
  if ($(window).scrollTop() > 125) {
    $('#nav_wrap').addClass('sticky_nav');
  }
  if ($(window).scrollTop() < 126) {
    $('#nav_wrap').removeClass('sticky_nav');
  }
});

/// - nav moves to top on scroll

$(window).scroll(function () {
  console.log($(window).scrollTop())

  if ($(window).scrollTop() > 125) {
    $('#logo_wrap').addClass('logo_move');
  }
  if ($(window).scrollTop() < 126) {
    $('#logo_wrap').removeClass('logo_move');
  }
});

/// - logo moves to top on scroll