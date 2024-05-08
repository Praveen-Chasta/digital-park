 

/*============================= Back To Top Button Script ========================*/
var mybutton = document.getElementById("backTop");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


(function ($) {
  $('body').css('padding-top', $('.navbar').outerHeight() + 'px')
  // detect scroll top or down
  if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        // console.log(scroll_top);
        if (scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        } else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        if (scroll_top === 0) {
          $('.smart-scroll').removeClass('scrolled-down').removeClass('scrolled-up');
        }
        last_scroll_top = scroll_top;
    });
  }



 
  // Bottom Section Service Slider Activaton Script (Homepage)
  // $(".noticeCarousel").owlCarousel({
  //   autoplay: true, 
  //   autoplayHoverPause: true,
  //   smartSpeed: 550,
  //   responsiveClass: true,
  //   autoplayTimeout: 10000,
  //   autoplaySpeed: 3000,
  //   loop: true,
  //   margin: 40,
  //   items: 2,
  //   nav: false,
  //   dots: true,
  //   responsiveClass: true, 
  //   responsive: { 
  //       0: { items: 1 },
  //       576: { items: 1  },
  //       768: { items: 1  },
  //       992: { items: 2  },  
  //   } 
  // });
 
  // $(".evaluationCarousel").owlCarousel({
  //   autoplay: true, 
  //   autoplayHoverPause: true,
  //   smartSpeed: 550,
  //   responsiveClass: true,
  //   autoplayTimeout: 10000,
  //   autoplaySpeed: 3000,
  //   loop: true,
  //   margin: 15,
  //   items: 4,
  //   nav: false,
  //   dots: true,
  //   responsiveClass: true, 
  //   responsive: { 
  //       0: { items: 1, margin: 8 },
  //       576: { items: 2, margin: 10  },
  //       768: { items: 2, margin: 15  },
  //       992: { items: 3, margin: 15  }, 
  //       1200: { items: 3, margin: 15 },  
  //   } 
  // });

  // Bottom Section Service Slider Activaton Script (Homepage)
  // $(".studentCarousel").owlCarousel({
  //   autoplay: true, 
  //   autoplayHoverPause: true,
  //   smartSpeed: 550,
  //   responsiveClass: true,
  //   autoplayTimeout: 10000,
  //   autoplaySpeed: 3000,
  //   loop: true,
  //   margin: 15,
  //   items: 4,
  //   nav: false,
  //   dots: true,
  //   responsiveClass: true, 
  //   responsive: { 
  //       0: { items: 1, margin: 8 },
  //       576: { items: 1, margin: 10  },
  //       768: { items: 1, margin: 15 },
  //       992: { items: 1, margin: 15 }, 
  //       1200: { items: 1, margin: 15 }, 
  //       1400: { items: 1, }, 
  //   } 
  // });
 
 
 
 
  $(".testimonialSlider").owlCarousel({
    autoplay: true, 
    autoplayHoverPause: true,
    smartSpeed: 550,
    responsiveClass: true,
    autoplayTimeout: 10000,
    autoplaySpeed: 3000,
    loop: true,
    margin: 15,
    items: 1.35,
    nav: true,
    dots: false, 
    responsiveClass: true, 
    responsive: { 
        0: { items: 1 },
        576: { items: 1  },
        768: { items: 2 },
        992: { items: 2 }, 
        1200: { items: 3 },  
    } 
  });
  
    
 
 
 
})(jQuery);
 

$(document).ready(function($) {
  //Check if an element was in a screen
  function isScrolledIntoView(elem){
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
      return ((elemBottom <= docViewBottom));
  }
  //Count up code
  function countUp() {
      $('.counter').each(function() {
      var $this = $(this), // <- Don't touch this variable. It's pure magic.
          countTo = $this.attr('data-count');
          ended = $this.attr('ended');

      if ( ended != "true" && isScrolledIntoView($this) ) {
          $({ countNum: $this.text()}).animate({
          countNum: countTo
      },
      {
          duration: 2500, //duration of counting
          easing: 'swing',
          step: function() {
          $this.text(Math.floor(this.countNum));
          },
          complete: function() {
          $this.text(this.countNum);
          }
      });
      $this.attr('ended', 'true');
      }
      });
  }
  //Start animation on page-load
  if ( isScrolledIntoView(".counter") ) {
      countUp();
  }
  //Start animation on screen
  $(document).scroll(function() {
      if ( isScrolledIntoView(".counter") ) {
          countUp();
      }
  });
});

new WOW().init();
