<?php
/**
 * Template Name: Products
 */

get_header(); ?>




<div class="products clearfix">
<h1>the firestarter collection</h1>
<br>
<h2>- handcrafted in europe -</h2>
<br>
<br>


  <?php $args = array( 'post_type' => 'product', 'meta_key' => 'gender', 'meta_value' => (is_page('products-men') ? 'Boys' : 'Girls'));
  $loop = new WP_Query( $args );
  while ( $loop->have_posts() ) : $loop->the_post(); ?>
    <a href="<?php the_permalink(); ?>" class="product">
      <?php echo get_the_post_thumbnail( $post->ID, 'medium', array( 'class' => 'className' ) ); ?>
      <div class="overlay">
        <div class="central-holder center-all">
          <div class="graphic center-all <?php echo get_post_meta($post->ID, 'product_function', true); ?>">
            <span><?php echo get_post_meta($post->ID, 'function_sum', true); ?></span>
          </div>
          <h2 class="title">- <?php the_title(); ?> -</h2>
        </div>

        <span class="price"><sup>$</sup><?php echo get_post_meta($post->ID, 'price', true); ?></span>
      </div>

    </a>
  <?php endwhile; ?>

</div>

<?php /*get_sidebar(); */?>
<?php get_footer(); ?>