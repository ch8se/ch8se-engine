<?php

function ch8se_scripts()
{
  wp_enqueue_style( 'ch8se-style', get_stylesheet_uri() );
  wp_enqueue_style( 'slick-style', get_template_directory_uri() . '/js/libs/slick/slick.css' );

  wp_enqueue_script('instafeed-script', get_template_directory_uri() . '/js/libs/instafeed.min.js');
  wp_enqueue_script('slick-script', get_template_directory_uri() . '/js/libs/slick/slick.min.js', array( 'jquery' ));
  // wp_enqueue_script('slick-script', get_template_directory_uri() . '/js/app.js', array( 'jquery' ));

}


add_action( 'wp_enqueue_scripts', 'ch8se_scripts' );


wp_register_script( 'api-extend', get_template_directory_uri() . '/js/app.js', array( 'jquery' ) );
wp_localize_script( 'api-extend', 'wpApiSettings', array( 'root' => esc_url_raw( rest_url() ), 'nonce' => wp_create_nonce( 'wp_rest' ) ) );

wp_enqueue_script('api-extend');




function admin_scripts( $hook ) {
    // if ('edit.php' != $hook) {
    //     return;
    // }
    wp_enqueue_script( 'admin-script', get_template_directory_uri() . '/js/admin.js', array( 'jquery' ) );
}

add_action('admin_enqueue_scripts', 'admin_scripts');







add_theme_support( 'post-thumbnails' );


add_action( 'init', 'register_cpt_r_code' );

function register_cpt_r_code() {

    $labels = array(
        'name' => __( 'Reedem Codes', 'r_code' ),
        'singular_name' => __( 'Reedem Code', 'r_code' ),
        'add_new' => __( 'Add New', 'r_code' ),
        'add_new_item' => __( 'Add New Reedem Code', 'r_code' ),
        'edit_item' => __( 'Edit Reedem Code', 'r_code' ),
        'new_item' => __( 'New Reedem Code', 'r_code' ),
        'view_item' => __( 'View Reedem Code', 'r_code' ),
        'search_items' => __( 'Search Reedem Codes', 'r_code' ),
        'not_found' => __( 'No reedem codes found', 'r_code' ),
        'not_found_in_trash' => __( 'No reedem codes found in Trash', 'r_code' ),
        'parent_item_colon' => __( 'Parent Reedem Code:', 'r_code' ),
        'menu_name' => __( 'Reedem Codes', 'r_code' ),
    );

    $args = array(
        'labels' => $labels,
        'hierarchical' => false,
        'supports' => array( 'title' ),
        'public' => false,
        'show_ui' => true,
        'show_in_nav_menus' => true,
        'publicly_queryable' => false,
        'exclude_from_search' => true,
        'has_archive' => false,
        'query_var' => true,
        'can_export' => true,
        'rewrite' => true,
        'show_in_rest' => true,
        'rest_base' => 'code-api',
        'capability_type' => 'post'
    );

    register_post_type( 'r_code', $args );
}


add_action('admin_menu', 'mt_add_pages');
function mt_add_pages() {
    add_submenu_page('edit.php?post_type=r_code', 
        'Import codes',
        'Import codes',
        'manage_options', 
        'testsettings', 
        'mt_settings_page');



    function mt_settings_page() {
        echo '<div id="code-import"></div>'; 

    }


}












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
/*function wpdocs_register_my_custom_menu_page() {
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

add_action( 'admin_menu', 'wpdocs_register_my_custom_menu_page' );*/



add_action( 'rest_api_init', 'registerTrees' );
function registerTrees() {
    $r_code_labels = array( 'trees', 'food', 'water', 'user', 'state' );

    foreach ($r_code_labels as $val) {
        register_rest_field( 'r_code',
            $val,
            array(
                'get_callback'    => 'get_meta',
                'update_callback' => 'update_my_meta',
                'schema'          => null,
            )
        );
    }
}

function get_meta( $object, $field_name, $request ) {
    return get_post_meta( $object[ 'id' ], $field_name, true );
}

function update_my_meta( $value, $object, $field_name ) {
    if ( ! $value || ! is_string( $value ) ) {
        return;
    }

    return update_post_meta( $object->ID, $field_name, strip_tags( $value ) );

}

add_action( 'rest_api_init', 'extend_user' );
function extend_user() {
    register_rest_field( 'user',
        'impact',
        array(
            'get_callback'    => 'fetch_user_meta',
            'update_callback' => 'post_user_meta',
            'schema'          => null,
        )
    );
}


function fetch_user_meta( $object, $field_name, $request ) {
    return get_user_meta( $object[ 'id' ], $field_name );
}

function post_user_meta( $value, $object, $field_name ) {
    if ( ! $value || ! is_string( $value ) ) {
        return;
    }

    return update_user_meta( $object->ID, $field_name, strip_tags( $value ) );
}





?>