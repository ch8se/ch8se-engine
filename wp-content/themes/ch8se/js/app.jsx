
var ch8se = window.ch8se || {};

jQuery( document ).ready(function( $ ) {
ch8se.init = function() {

  $('.carousel').slick({
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true
  });


  ch8se.menuToggle();
  ch8se.menuFix();
  ch8se.instafeedInit();
  ch8se.opacitySlider();
  ch8se.fixProductHeight();
  ch8se.productView();
  ch8se.youtubePopup();
  ch8se.champSubscribe();



  $(window).on('resize', function() {
    ch8se.menuFix();
    ch8se.fixProductHeight();
    // ch8se.fixIframeSize();
  });



  //TODO add these into seperate functions
  $.ajax({
    type: 'GET',
    url: 'http://api.hostip.info/get_html.php',
    success: function(data) {
      $('input[name="ip-address"]').val(data.split('IP: ')[1]);
    }
  });

  $('.site-nav .subscribe, .get-notified').on('click', e => {
    $('.subscribe-overlay').show();
  });

  $('.subscribe-overlay').on('click touchend', e => {
    var $target = $(e.target);

    if ($target.hasClass('subscribe-overlay') || $target.hasClass('close')) {
      $('.subscribe-overlay').hide();
    }
  });

  $('.subscribe-overlay form').on('submit', e => {

    setTimeout(function() {
      if ($('.subscribe-overlay form').hasClass('sent')) $('.subscribe-overlay').hide();
    }, 2000);

  });


  $('.contact-us input[type="email"], .contact-us input[type="text"]').each(function() {
    var $this = $(this);

    $this.attr('placeholder', $this.attr('name'));
  });

  $('input[name="promo-code"]').val(makeid());



}
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for( var i=0; i < 6; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function trueWindowWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}
function trueWindowHeight() {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}


ch8se.champSubscribe = function() {
  var $container = $('.champ-subscribe');

  if (!$container.length) return;

  $('.become-champ').on('click', function() {
    if ($('.become-champ').css('display') === 'block') return;
    $container.css({display: 'block'}).animate({
      opacity: 1,
      height: 2000,
    }, 1000);
    $('html, body').animate({
        scrollTop: $container.offset().top
    }, 1000);
  })

  var $form = $container.find('form');

  $form.find('span[placeholder]').each(function() {
    var $this = $(this);

    $this.find('input, textarea').attr('placeholder', $this.attr('placeholder'));
  });

  $('.profile-picture').on('click', function(e) {
    $('.profile-picture + span > input').click();
  });

  $('.profile-picture + span > input').on('change', function(e) {
    var reader = new FileReader();
    reader.onload = function(){
      console.log(reader.result);
      $('.profile-picture').html('<img src="' + reader.result + '" />')
    };
    reader.readAsDataURL(event.target.files[0]);
  });

}

ch8se.youtubePopup = function() {

  var popup = `<div class="iframe-holder">
    <div class="underlay">
      <i class="fa fa-times-circle"></i>
      <iframe src="https://www.youtube.com/embed/bAlx_pRYmwg" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>`

  ch8se.$youtubeLink = $('.fa-youtube-play');
  $('.youtube-play').on('click', function() {
    $('body').append(popup);
    ch8se.fixIframeSize();    
  });
  

}


ch8se.fixIframeSize = function() {
  var $iframeHolder = $('.iframe-holder');
  var $iframe = $('.iframe-holder iframe');
  if (!$iframe.length) return;

  //Get youtubeLink position and start iframe size from it
  //console.log(ch8se.$youtubeLink.offset(), ch8se.$youtubeLink.width());
    var $underlay = $iframeHolder.find('.underlay');

    var originalCss = {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      position: 'absolute',
      top: ch8se.$youtubeLink.offset().top,
      left: ch8se.$youtubeLink.offset().left,
      width: ch8se.$youtubeLink.width(),
      height: ch8se.$youtubeLink.height()
    };


    $underlay.css(originalCss);


    var animationStyles = trueWindowWidth() / trueWindowHeight() <= 16/9 ? {
      top: (trueWindowHeight() - trueWindowWidth() * 0.9 * 9 / 16) / 2,
      left: (trueWindowWidth() - trueWindowWidth() * 0.9)  / 2,
      width: trueWindowWidth() * 0.9,
      height: trueWindowWidth() * 0.9 * 9 / 16
    } : {
      top: (trueWindowHeight() - trueWindowHeight() * 0.9) / 2,
      left: (trueWindowWidth() - trueWindowHeight() * 0.9 * 16 / 9) / 2,
      width: trueWindowHeight() * 0.9 * 16 / 9,
      height: trueWindowHeight() * 0.9
    };

    $iframeHolder.css({backgroundColor: 'rgba(34, 34, 34, 0.64)'});
    $underlay.css($.extend({
      transition: 'all 0.5s ease',
      backgroundColor: 'rgba(0, 0, 0, 1)',
    }, animationStyles));

    setTimeout(function() {
      // $underlay.hide();

      $iframe.css({
        display: 'block'
      });

      $iframe.siblings('i').css({opacity: 1 });
    }, 500);


    $iframeHolder.on('click', function(e) {
      var $target = $(e.target);

      if ($target.hasClass('iframe-holder') || $target.hasClass('fa')) {
        // $iframeHolder.hide();
        // $underlay.show();

        $iframe.siblings('i').hide();
        $iframe.css({
          display: 'none'
        });

        $iframeHolder.css({backgroundColor: 'rgba(34, 34, 34, 0)'});
        $underlay.css($.extend({backgroundColor: 'rgba(0, 0, 0, 0)'}, originalCss));

        setTimeout(function() {
          $iframeHolder.remove();
          ch8se.$youtubeLink.addClass('swing animated');

          setTimeout(function() {
            ch8se.$youtubeLink.removeClass('swing animated');
          }, 1000);
        }, 500);
      }
    });

  $(window).on('resize', function() {
    $iframeHolder.remove();
  });
  
  // $iframe.height($iframe.width()*9/16);
  // 
};

ch8se.fixProductHeight = function() {
  var trueHeight = 0; //Make sure same width is used for all elements

  $('.product').each(function(i) {
    var $this = $(this);

    if (!i) trueHeight = $this.width()*(6/5);

    $this.height(trueHeight);
  });
}

ch8se.menuToggle = function() {
  var $hamburger = $('.site-nav .fa-bars'),
      $menu = $('.site-nav > ul');

  $hamburger.on('click', function() {
    $menu.toggleClass('expand');

    $menu.css({transition: 'all 0.5s ease'});

    setTimeout(function() {
      $menu.css({transition: ''});
    }, 500);
  });


  $menu.find('> li > a, > li > span').on('click', function(e) {
    var $this = $(this);

    if (trueWindowWidth() < 600 /*&& !$this.parent().hasClass('expand')*/ && $this.siblings().length) {
      e.preventDefault();
      var $cont = $this.siblings('div');

      if (!$this.parent().hasClass('expand')) {
        $this.parent().addClass('expand');
        $cont.css({transition: 'all 0.5s ease', height: $cont.find('ul').height() + 20});
      } else {
        $this.parent().removeClass('expand');
        $cont.css({transition: 'all 0.5s ease', height: 0});
      }

      setTimeout(function() {
        $cont.css({transition: ''});
      }, 500);

    } else {
      $this.parent().removeClass('expand');
    }
  });
}

ch8se.menuFix = function() {
  var $siteNav = $('.site-nav');

  $siteNav.find('> ul > li').each(function(i) {
    var $this = $(this),
        $ul = $(this).find('> div > ul');

    if (trueWindowWidth() > 762) {
      $this.find('> a, > span').removeClass('has-children');


      if ($ul.length) {
        $this.find('> div').css({display: 'block'}); //Stupid hack, js can't calculate width of hidden element


        $ul.css({'margin-left': ($this.position().left - (i !== 1 ? $ul.find('li:first-child').width() : 0))});

        $this.find('> div').css({display: ''});
      }
    } else {
      $ul.removeAttr('style');

      if (i >= 0 && i <= 3) {
        $this.find('> a, > span').addClass('has-children');
      }
      // if (i >= 2) {
      //   $this.css({transform: 'translateY(-' + $siteNav.find('> ul > li:first-child').height() + 'px)'});
      // }
    }
  });
}

ch8se.instafeedInit = function() {
  if ($('#instafeed').length) {
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
          autoplaySpeed: 10000,
          responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 6,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 3,
              }
            }
          ]
        });
      }
    });
    feed.run();
  }



  //TODO: optimise this!!!!!!!!
  if ($('#ch8sedayFeed').length) {
    var $ch8sedayFeed = $('#ch8sedayFeed');
    $ch8sedayFeed.addClass('tag-feed');


    var ch8sedayFeed = new Instafeed({
      target: 'ch8sedayFeed',
      get: 'tagged',
      tagName : 'ch8se', //change to ch8seday
      clientId: 'e6c9243435d84aeabf438796399d841c',
      resolution: 'standard_resolution',
      limit: 10,
      after: function() {
        $ch8sedayFeed.append('<div>#ch8seday</div>');
        $ch8sedayFeed.find('img').on('load', function() {
          var height = $ch8sedayFeed.find('img').height();
          $ch8sedayFeed.find('div').css({height: height, lineHeight: height + 'px', fontSize: height/10*3});
        });

        $(window).on('resize', function() {
          var height = $ch8sedayFeed.find('img').height();
          $ch8sedayFeed.find('div').css({height: height, lineHeight: height + 'px', fontSize: height/10*3});
        });
      }
    });

    ch8sedayFeed.run();
  }

  if ($('#ch8serFeed').length) {
    var $ch8serFeed = $('#ch8serFeed');
    $ch8serFeed.addClass('tag-feed');

    var ch8ser = new Instafeed({
      target: 'ch8serFeed',
      get: 'tagged',
      tagName : 'ch8ser',
      clientId: 'e6c9243435d84aeabf438796399d841c',
      resolution: 'standard_resolution',
      limit: 46,
      after: function() {
        $ch8serFeed.append('<div>#ch8ser</div>');
        $ch8serFeed.find('img').on('load', function() {
          var height = $ch8serFeed.find('img').height();
          $ch8serFeed.find('div').css({height: height, lineHeight: height + 'px', fontSize: height/10*3});
        });

        $(window).on('resize', function() {
          var height = $ch8serFeed.find('img').height();
          $ch8serFeed.find('div').css({height: height, lineHeight: height + 'px', fontSize: height/10*3});
        });
      }
    });

    ch8ser.run();
  }
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

ch8se.productView = function() {
  var $preview = $('.single-product-block'),
      $enlargedImg = $preview.find('.enlarged img'),
      $thumbs = $preview.find('.thumbs a');

  $thumbs.on('click', function(e) {
    e.preventDefault();

    $thumbs.removeClass('active');
    var $this = $(this);

    $enlargedImg.attr('src', $this.attr('href'));

    $this.addClass('active');
  });
}


ch8se.init();

});