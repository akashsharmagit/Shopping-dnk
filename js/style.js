$(document).ready(function() {
    $("#carousel").owlCarousel({
        autoplay: true,
        rewind: false,
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        smartSpeed: 800,
        nav: false,
        dots:false,
        responsive: {
          0: {
            items: 1
          },
      
          600: {
            items: 3
          },
      
          1024: {
            items: 6
          },
      
          1366: {
            items: 6
          }
        }
    });
  });
