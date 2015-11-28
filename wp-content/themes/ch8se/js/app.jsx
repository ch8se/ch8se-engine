
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
  ch8se.fixIframeSize();
  // ch8se.fixIframeSize();



  $(window).on('resize', function() {
    ch8se.menuFix();
    ch8se.fixProductHeight();
    ch8se.fixIframeSize();
  });

  // console.log(myIP());



  $('.iframe-holder').on('click', function(e) {
    var $target = $(e.target);

    if ($target.hasClass('iframe-holder') || $target.hasClass('fa')) {
      $('.iframe-holder').hide();
    }
  });


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

ch8se.fixIframeSize = function() {
  var $iframe = $('.iframe-holder iframe');
  if (!$iframe.length) return;

  
  $iframe.height($iframe.width()*9/16);
  $iframe.siblings('i').css({top: $iframe.offset().top - $(document).scrollTop(), right: $iframe.offset().left })
}

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
  })
}

ch8se.menuFix = function() {
  var $siteNav = $('.site-nav');

  $siteNav.find('> ul > li').each(function(i) {
    var $this = $(this),
        $ul = $(this).find('> div > ul');

    if (trueWindowWidth() >= 600) {
      $this.removeAttr('style');
      if ($ul.length) {
        $ul.css({'margin-left': ($this.position().left)});
      }
    } else {
      $ul.removeAttr('style');
      if (i >= 2) {
        $this.css({transform: 'translateY(-' + $siteNav.find('> ul > li:first-child').height() + 'px)'});
      }
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