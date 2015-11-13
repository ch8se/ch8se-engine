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
        <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Shop</a></li>
        <li><a href="<?php echo esc_url( home_url( '/test' ) ); ?>">Impact</a></li>
        <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Community</a></li>
        <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Crafts</a></li>
        <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">About us</a></li>
      </ul>
    </nav>
  </header><!-- .site-header -->

  <?php /*get_sidebar(); */?>

  <div id="content" class="site-content">
