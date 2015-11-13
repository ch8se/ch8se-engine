<?php

function ch8se_scripts()
{
  wp_enqueue_style( 'ch8se-style', get_stylesheet_uri() );
  wp_enqueue_style( 'slick-style', get_template_directory_uri() . '/js/libs/slick/slick.css' );

  wp_enqueue_script('ch8se-script', get_template_directory_uri() . '/js/libs/slick/slick.min.js', array( 'jquery' ));
  wp_enqueue_script('slick-script', get_template_directory_uri() . '/js/app.js', array( 'jquery' ));

}


add_action( 'wp_enqueue_scripts', 'ch8se_scripts' );














?>