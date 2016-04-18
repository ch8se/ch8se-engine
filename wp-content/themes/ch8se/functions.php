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


// add_action( 'init', 'register_ch8se_product' );

// function register_ch8se_product() {

//     $labels = array( 
//         'name' => _x( 'Products', 'product' ),
//         'singular_name' => _x( 'Product', 'product' ),
//         'add_new' => _x( 'Add New', 'product' ),
//         'add_new_item' => _x( 'Add New Product', 'product' ),
//         'edit_item' => _x( 'Edit Product', 'product' ),
//         'new_item' => _x( 'New Product', 'product' ),
//         'view_item' => _x( 'View Product', 'product' ),
//         'search_items' => _x( 'Search Products', 'product' ),
//         'not_found' => _x( 'No products found', 'product' ),
//         'not_found_in_trash' => _x( 'No products found in Trash', 'product' ),
//         'parent_item_colon' => _x( 'Parent Product:', 'product' ),
//         'menu_name' => _x( 'Products', 'product' ),
//     );

//     $args = array( 
//         'labels' => $labels,
//         'menu_icon' => 'dashicons-carrot',
//         'hierarchical' => false,
//         'description' => 'Product',
//         'supports' => array( 'title', 'thumbnail' ),
//         'taxonomies' => array( 'Gender' ),
//         'public' => true,
//         'show_ui' => true,
//         'show_in_menu' => true,
        
        
//         'show_in_nav_menus' => true,
//         'publicly_queryable' => true,
//         'exclude_from_search' => false,
//         'has_archive' => true,
//         'query_var' => true,
//         'can_export' => true,
//         'rewrite' => true,
//         'capability_type' => 'post'
//     );

//     register_post_type( 'product', $args );
// }




add_action( 'init', 'register_ambassador' );

function register_ambassador() {

    $labels = array( 
        'name' => _x( 'Ambassadors', 'ambasador' ),
        'singular_name' => _x( 'Ambassador', 'ambasador' ),
        'add_new' => _x( 'Add New', 'ambasador' ),
        'add_new_item' => _x( 'Add New Ambassador', 'ambasador' ),
        'edit_item' => _x( 'Edit Ambassador', 'ambasador' ),
        'new_item' => _x( 'New Ambassador', 'ambasador' ),
        'view_item' => _x( 'View Ambassador', 'ambasador' ),
        'search_items' => _x( 'Search Ambassadors', 'ambasador' ),
        'not_found' => _x( 'No ambasadors found', 'ambasador' ),
        'not_found_in_trash' => _x( 'No ambasadors found in Trash', 'ambasador' ),
        'parent_item_colon' => _x( 'Parent Ambassador:', 'ambasador' ),
        'menu_name' => _x( 'Ambassadors', 'ambasador' ),
    );

    $args = array( 
        'labels' => $labels,
        'menu_icon' => 'dashicons-groups',
        'hierarchical' => false,
        'description' => 'Ambassador',
        'supports' => array( 'title', 'thumbnail' ),
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

    register_post_type( 'ambassador', $args );
}




register_sidebar( array(
    'id'          => 'subscribe-footer',
    'name'        => 'Subscribe in footer area',
    'description' => __( 'Subscribe in footer area.', 'text_domain' ),
) );

register_sidebar( array(
    'id'          => 'popup',
    'name'        => 'Popup',
    'description' => __( 'Subscribe in Popup.', 'text_domain' ),
) );

add_action( 'after_setup_theme', 'woocommerce_support' );
function woocommerce_support() {
    add_theme_support( 'woocommerce' );
}


function addCharityFunction() {
    ?>
        <div class="graphic <?php echo get_post_meta(get_the_ID(), 'product_function', true); ?>">
            <span><?php echo get_post_meta(get_the_ID(), 'function_sum', true); ?></span>
        </div>

        <?php if (get_post_meta(get_the_ID(), 'qoute', true)) { ?>
            <p class="qoute">"<?php echo get_post_meta(get_the_ID(), 'qoute', true); ?>"</p>
            <p class="author"><?php echo get_post_meta(get_the_ID(), 'author', true); ?></p>


        <?php } ?>
        <p><?php echo get_post_meta(get_the_ID(), 'description', true); ?></p>
        <p class="size-chart"><a href="<?php echo esc_url( home_url( '/size-chart' ) ); ?>">Size chart</a></p>

        <div class="collection <?php echo get_post_meta(get_the_ID(), 'kolekcija', true); ?>"></div>
    <?php
}
add_action( 'woocommerce_single_product_summary', 'addCharityFunction', 6 );


/**
 * Register a custom menu page.
 */
function wpdocs_register_my_custom_menu_page() {
    add_menu_page(
        __( 'Redeem codes', 'textdomain' ),
        'Redeem codes',
        'manage_options',
        'test-plugin',
        'test_init',
        'dashicons-editor-code',
        6
    );
}
 
function test_init(){
        echo "<h1>Hello World!</h1>";
}

add_action( 'admin_menu', 'wpdocs_register_my_custom_menu_page' );

?>