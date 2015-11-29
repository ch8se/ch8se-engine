<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="http://gmpg.org/xfn/11">
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">

  <header id="masthead" class="site-header" role="banner">
    <nav class="site-nav clearfix">
      <i class="fa fa-bars"></i>
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo">Home</a>


      <ul>
        <li>
          <a href="<?php echo esc_url( home_url( '/shop' ) ); ?>">Shop</a>
          <div>
            <ul class="man-woman">
              <li><a href="<?php echo esc_url( home_url( '/products-men' ) ); ?>">Men</a></li>
              <li><a href="<?php echo esc_url( home_url( '/products-woman' ) ); ?>">Woman</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="<?php echo esc_url( home_url( '/impact' ) ); ?>">Impact</a>
          <div>
            <ul class="stack">
              <li><a href="<?php echo esc_url( home_url( '/impact/#how-it-works' ) ); ?>">How it works</a></li>
              <li><a href="<?php echo esc_url( home_url( '/impact/#causes' ) ); ?>">Causes</a></li>
              <li><a href="<?php echo esc_url( home_url( '/impact/#transparency' ) ); ?>">Transparency</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Community</a>
          <div>
            <ul>
              <li><a href="<?php echo esc_url( home_url( '/ch8seday' ) ); ?>">ch8seday Tuesday<br><span>The critical mass of fashion.</span></a></li>
              <li>
                <a href="<?php echo esc_url( home_url( '/ch8sers' ) ); ?>">Ch8sers</a>
                <ul>
                  <li><a href="<?php echo esc_url( home_url( '/ch8sers/#firestarters' ) ); ?>">Firestarters</a></li>
                  <li><a href="<?php echo esc_url( home_url( '/ch8sers/#ambassadors' ) ); ?>">Ambassadors</a></li>
                </ul>
              </li>
              <li><a href="">Blog</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Crafts</a>
          <div>
            <ul>
              <li>
                <a href="">Design</a>
              </li>
              <li>
                <a href="">Craftsmanship</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="<?php echo esc_url( home_url( '/about-us' ) ); ?>">About us</a>
        </li>
        <li>
          <i class="fa fa-youtube-play"></i>
          <span>play the video</span>
        </li>
      </ul>
    </nav>
  </header><!-- .site-header -->

  <?php /*get_sidebar(); */?>
  <div class="wrap">
    <div id="content" class="site-content">
