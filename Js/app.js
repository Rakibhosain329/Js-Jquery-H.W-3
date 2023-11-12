
$(function(){
    $(".journey-cnt").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:".leftArrow",
        nextArrow:".rightArrow",
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        dotsClass:"customDots",
        
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
                centerPadding: '20px',
                slidesToShow: 1
              }
            }
          ]
    })
})