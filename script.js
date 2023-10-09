$(document).ready(function() {
    var navbar = $('.navbar');
    var sticky = navbar.offset().top;
  
    $(window).scroll(function() {
      if (window.pageYOffset > sticky) {
        navbar.addClass('sticky');
      } else {
        navbar.removeClass('sticky');
      }
    });
  });