
$(window).on("load", function () {
  $('body,html').scrollTop(0)
  $(".pre-loader").fadeOut(500, function () {
      $(this).remove();
      $('html, body').css("overflow-y", "visible");


  });
});

  new WOW().init();
  
  
$(function() {


  
  
  
    
    $('.header .owl-carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:1,
      dots:true,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      },
      navText: ["<span class='lnr lnr-chevron-right'></span>","<span class='lnr lnr-chevron-left'></span>"]
    });





    
    


    
    
  

  // menu - search




    




    $(".nav-bar .icons .menu-icon").on("click", function () {
      $(".fixed-menu").fadeIn();
      $(".fixed-menu .menu").addClass("show");
      $(".fixed-menu .main-list").addClass("show");
      $('html, body').css("overflow-y", "hidden");
    });
    $(".fixed-menu, .fixed-menu .menu-header .close").on("click", function () {
      $(".fixed-menu").fadeOut();
      $(".fixed-menu .menu").removeClass("show");
      $(".fixed-menu .main-list").removeClass("show");
      $('html, body').css("overflow-y", "visible");
    });
    $(".fixed-menu .menu").on("click", function(e) {
      e.stopPropagation();
    });



    $(".fixed-menu .main-list .slide").on("click", function() {
      $(this).toggleClass("active");
      $(this).children("ul").slideToggle();
      });
    $(".fixed-menu .sub-list .slide-two").on("click", function(e) {
      e.stopPropagation();
    });
    $(".fixed-menu .sub-list .slide-two").on("click", function() {
      $(this).toggleClass("active");
      $(this).children("ul").slideToggle();
    });


     

    

  
});