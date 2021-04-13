// navigacija
$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $("nav").addClass("fixed-top");
    } else {
      $("nav").removeClass("fixed-top");
    }
  });

  

 
