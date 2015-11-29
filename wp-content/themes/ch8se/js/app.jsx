
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


  ch8se.menuToggle();
  ch8se.menuFix();
  ch8se.instafeedInit();
  ch8se.opacitySlider();
  ch8se.fixProductHeight();
  ch8se.productView();
  ch8se.youtubePopup();



  $(window).on('resize', function() {
    ch8se.menuFix();
    ch8se.fixProductHeight();
    // ch8se.fixIframeSize();
  });

  // console.log(myIP());


}

  function myIP() {
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET","http://api.hostip.info/get_html.php",false);
    xmlhttp.send();

    hostipInfo = xmlhttp.responseText.split("\n");

    for (i=0; hostipInfo.length >= i; i++) {
        ipAddress = hostipInfo[i].split(":");
        if ( ipAddress[0] == "IP" ) return ipAddress[1];
    }

    return false;
  }


function trueWindowWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}
function trueWindowHeight() {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}


ch8se.youtubePopup = function() {

  var popup = `<div class="iframe-holder">
    <div class="underlay">
      <i class="fa fa-times-circle"></i>
      <iframe src="https://www.youtube.com/embed/bAlx_pRYmwg" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>`

  ch8se.$youtubeLink = $('.fa-youtube-play');
  ch8se.$youtubeLink.on('click', function() {
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


    $iframeHolder.on('click touchstart', function(e) {
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


  $menu.find('> li > a').on('click', function(e) {
    var $this = $(this);

    if (trueWindowWidth() < 600 && !$this.parent().hasClass('expand') && $this.siblings().length && $this.text() !== 'Impact') {
      e.preventDefault();
      $this.parent().addClass('expand');

      var $cont = $this.siblings('div');

      $cont.css({transition: 'all 0.5s ease', height: $cont.find('ul').height() + 20});

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

    if (trueWindowWidth() >= 600) {
      $this.find('> a').removeClass('has-children');


      if ($ul.length) {
        $ul.css({'margin-left': ($this.position().left)});
      }
    } else {
      $ul.removeAttr('style');

      if (i === 0 || i === 2 || i === 3) {
        $this.find('> a').addClass('has-children');
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