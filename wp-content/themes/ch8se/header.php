<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width">
  <link rel="profile" href="http://gmpg.org/xfn/11">
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">

  <header id="masthead" class="site-header" role="banner">
    <nav class="site-nav clearfix">
      <ul>
        <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a></li>
        <li>
          <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Shop</a>
          <ul class="man-woman">
            <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Men</a></li>
            <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Woman</a></li>
          </ul>
        </li>
        <li>
          <a href="<?php echo esc_url( home_url( '/test' ) ); ?>">Impact</a>
          <ul>
            <li><a href="">How it works</a></li>
            <li><a href="">Transparency</a></li>
            <li><a href="">Causes</a></li>
          </ul>
        </li>
        <li>
          <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Community</a>
          <ul>
            <li><a href="">Blog</a></li>
            <li><a href="">Ch8seplay</a></li>
            <li>
              <a href="">Ch8sers</a>
              <ul>
                <li><a href="">Firestarters</a></li>
                <li><a href="">Ambassadors</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Crafts</a>
          <ul>
            <li>
              <a href="">Design</a>
            </li>
            <li>
              <a href="">Craftsmanship</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="<?php echo esc_url( home_url( '/' ) ); ?>">About us</a>
        </li>
      </ul>
    </nav>
  </header><!-- .site-header -->

  <?php /*get_sidebar(); */?>

  <div id="content" class="site-content">
