
var ch8se = window.ch8se || {};

jQuery( document ).ready(function( $ ) {
ch8se.init = function() {

  $('.carousel').slick({
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
    dots: true
  });


  ch8se.menuFix();
  ch8se.instafeedInit();
  ch8se.opacitySlider();
  ch8se.fixProductHeight();
}

ch8se.fixProductHeight = function() {
  $('.product').each(function() {
    var $this = $(this);

    $this.height($this.width()*6/5);
  });
}

ch8se.menuFix = function() {
  var $siteNav = $('.site-nav');

  $siteNav.find('> ul > li').each(function() {
    var $this = $(this),
        $ul = $(this).find('> div > ul');

    if ($ul.length) {
      $ul.css({'margin-left': ($this.position().left)});
    }
  });
}

ch8se.instafeedInit = function() {
  if (!$('#instafeed').length) return;
  
  var feed = new Instafeed({
    get: 'user',
    userId: '1643007057',
    clientId: 'e6c9243435d84aeabf438796399d841c',
    resolution: 'standard_resolution',
    after: function() {
      $('#instafeed').slick({
        adaptiveHeight: true,
        slidesToShow: 8,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 10000
      });
    }
  });
  feed.run();
}

ch8se.opacitySlider = function() {
  var $parent = $('.graphic-slideshow');
  var $slides = $parent.find('img');
  var activeSlide = 0;

  function changeOpacity() {
    $slides.css({opacity: 0});
    $slides.eq(activeSlide).css({opacity: 1});
  }

  changeOpacity(0);

  setInterval(function(){
    activeSlide == $slides.length - 1 ? activeSlide = 0 : activeSlide++;

    changeOpacity();
  }, 4000);

}


ch8se.init();

});