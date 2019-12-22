$('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    nav: true,
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
});


$('#toggle').on('click', () => {
    $('#toggle').toggleClass('active');
    $('.nav_ul').toggleClass('open');
})

$('.nav_link').on('click', function(){
  if($(window).width() < 768){
            $('#toggle').click();
  }

  });