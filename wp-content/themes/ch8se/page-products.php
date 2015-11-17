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
  

  <?php $args = array( 'post_type' => 'product');
  $loop = new WP_Query( $args );
  while ( $loop->have_posts() ) : $loop->the_post(); ?>
    <div class="product">
      <?php echo get_the_post_thumbnail( $post->ID, 'medium', array( 'class' => 'className' ) ); ?>
      <div class="overlay">
        <h2 class="title">- <?php the_title(); ?> -</h2>

        <div class="graphic center-all <?php echo get_post_meta($post->ID, 'product_function', true); ?>">
          <span><?php echo get_post_meta($post->ID, 'function_sum', true); ?></span>
        </div>

        <span class="price"><sup>$</sup><?php echo get_post_meta($post->ID, 'price', true); ?></span>
      </div>

    </div>
  <?php endwhile; ?>

</div>

<?php /*get_sidebar(); */?>
<?php get_footer(); ?>