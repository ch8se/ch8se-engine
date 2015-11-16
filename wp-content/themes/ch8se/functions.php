<?php

function ch8se_scripts()
{
  wp_enqueue_style( 'ch8se-style', get_stylesheet_uri() );
  wp_enqueue_style( 'slick-style', get_template_directory_uri() . '/js/libs/slick/slick.css' );

  wp_enqueue_script('instafeed-script', get_template_directory_uri() . '/js/libs/instafeed.min.js');
  wp_enqueue_script('ch8se-script', get_template_directory_uri() . '/js/libs/slick/slick.min.js', array( 'jquery' ));
  wp_enqueue_script('slick-script', get_template_directory_uri() . '/js/app.js', array( 'jquery' ));

}


add_action( 'wp_enqueue_scripts', 'ch8se_scripts' );

add_theme_support( 'post-thumbnails' );


add_action( 'init', 'register_ch8se_product' );

function register_ch8se_product() {

    $labels = array( 
        'name' => _x( 'Products', 'product' ),
        'singular_name' => _x( 'Product', 'product' ),
        'add_new' => _x( 'Add New', 'product' ),
        'add_new_item' => _x( 'Add New Product', 'product' ),
        'edit_item' => _x( 'Edit Product', 'product' ),
        'new_item' => _x( 'New Product', 'product' ),
        'view_item' => _x( 'View Product', 'product' ),
        'search_items' => _x( 'Search Products', 'product' ),
        'not_found' => _x( 'No products found', 'product' ),
        'not_found_in_trash' => _x( 'No products found in Trash', 'product' ),
        'parent_item_colon' => _x( 'Parent Product:', 'product' ),
        'menu_name' => _x( 'Products', 'product' ),
    );

    $args = array( 
        'labels' => $labels,
        'menu_icon' => 'dashicons-carrot',
        'hierarchical' => false,
        'description' => 'Product',
        'supports' => array( 'title', 'thumbnail' ),
        'taxonomies' => array( 'Gender' ),
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        
        
        'show_in_nav_menus' => true,
        'publicly_queryable' => true,
        'exclude_from_search' => false,
        'has_archive' => true,
        'query_var' => true,
        'can_export' => true,
        'rewrite' => true,
        'capability_type' => 'post'
    );

    register_post_type( 'product', $args );
}








?>