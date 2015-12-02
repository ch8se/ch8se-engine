<?php
$image1 = wp_get_attachment_image_src(get_post_thumbnail_id(),'medium', true)[0];



get_header(); ?>


<div class="content">
  <div class="single-product-block clearfix">
    <div class="preview">
      <div class="enlarged">
        <img src="<?php echo $image1 ?>" alt="">
      </div>
      <div class="thumbs">
        <a class="active" href="<?php echo $image1 ?>">
          <img src="<?php echo wp_get_attachment_image_src(get_post_thumbnail_id(),'thumbnail', true)[0]; ?>" alt="">
        </a>
        <?php if (get_post_meta($post->ID, 'image_2', true)) { ?>
          <a href="<?php echo wp_get_attachment_image_src(get_post_meta($post->ID, 'image_2', true),'medium', true)[0]; ?>">
            <img src="<?php echo wp_get_attachment_image_src(get_post_meta($post->ID, 'image_2', true),'thumbnail', true)[0]; ?>" alt="">
          </a>
        <?php } ?>
        <?php if (get_post_meta($post->ID, 'image_3', true)) { ?>
          <a href="<?php echo wp_get_attachment_image_src(get_post_meta($post->ID, 'image_3', true),'medium', true)[0]; ?>">
            <img src="<?php echo wp_get_attachment_image_src(get_post_meta($post->ID, 'image_3', true),'thumbnail', true)[0]; ?>" alt="">
          </a>
        <?php } ?>
        <?php if (get_post_meta($post->ID, 'image_4', true)) { ?>
          <a href="<?php echo wp_get_attachment_image_src(get_post_meta($post->ID, 'image_4', true),'medium', true)[0]; ?>">
            <img src="<?php echo wp_get_attachment_image_src(get_post_meta($post->ID, 'image_4', true),'thumbnail', true)[0]; ?>" alt="">
          </a>
        <?php } ?>
      </div>
      
    </div>



    <div class="details">
      <div class="graphic <?php echo get_post_meta($post->ID, 'product_function', true); ?>">
        <span><?php echo get_post_meta($post->ID, 'function_sum', true); ?></span>
      </div>

      <div class="title">
        <h1><?php the_title(); ?></h1>
        <h4>the firestarter collection</h4>
        <br>
        <h5>- handcrafted in europe -</h5>
      </div>


      <?php if (get_post_meta($post->ID, 'qoute', true)) { ?>
        <p class="qoute">"<?php echo get_post_meta($post->ID, 'qoute', true); ?>"</p>
        <p class="author"><?php echo get_post_meta($post->ID, 'author', true); ?></p>


      <?php } ?>
      <p><?php echo get_post_meta($post->ID, 'description', true); ?></p>

      <a href="" class="btn">Get notified</a>

      <br>
      <span class="price"><sup>$</sup><?php echo get_post_meta($post->ID, 'price', true); ?></span>

      <div class="social invert">
        <p>Share</p>
        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=<?php echo home_url(add_query_arg(array(),$wp->request)); ?>"><i class="fa fa-facebook"></i></a>
        <a target="_blank" href="https://twitter.com/home?status=<?php echo home_url(add_query_arg(array(),$wp->request)); ?>"><i class="fa fa-twitter"></i></a>
      </div>

    </div>
  </div>
</div>


<?php get_footer(); ?>