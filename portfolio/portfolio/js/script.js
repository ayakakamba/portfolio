$(function() {
  
    //loding
    setTimeout(function(){
      $('.logo_fadein p').fadeIn(1000);
    },500);
    setTimeout(function(){
      $('.logo_fadein').fadeOut(1000);
    },2500);

    //fadein
    $(window).scroll(function () {
      $('section').each(function () {
        const imgPos = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if(scroll > imgPos - windowHeight + 200) {
          $(this).addClass("fadeIn");
        }
      });
    });

    //smooth scroll
    $('a[href^="#"]').on('click',function (event) {
      const speed = 500;
      const href = $(this).attr('href');
      let $target;
      if (href == '#') {
        $target = $('html');
      }
      else {
        $target = $(href);
      }
      const position = $target.offset().top;
      $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
      return false;
    });

    //back to top
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#page-top').fadeIn();
      } else {
        $('#page-top').fadeOut();
      }
    });

    //humberger
    $(".menu-button").click(function () {
      $(this).toggleClass("active");
      $(".nav-sp").toggleClass("active");
    });


  });

