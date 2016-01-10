<?php

get_header(); ?>


<div class="content ambassador">
  <div class="banner">
  <img src="<?php echo wp_get_attachment_image_src(get_post_meta($post->ID, 'cover_image', true),'', true)[0]; ?>">
</div>

  <div class="biography clearfix">
  	<div class="profile-picture">
  		<img src="<?php echo wp_get_attachment_image_src(get_post_thumbnail_id(),'medium', true)[0]; ?>" alt="<?php the_title(); ?>">
  		<div class="social invert sing">
  			

        <?php if (get_post_meta($post->ID, 'facebook_link', true)) { ?>
        <a href="http://<?php echo get_post_meta($post->ID, 'facebook_link', true); ?>">
  				<i class="fa fa-facebook"></i>
  			</a>
        <?php } ?>
  			

        <?php if (get_post_meta($post->ID, 'instagram_link', true)) { ?>
        <a href="http://<?php echo get_post_meta($post->ID, 'instagram_link', true); ?>">
  				<i class="fa fa-instagram"></i>
  			</a>
        <?php } ?>
  			

        <?php if (get_post_meta($post->ID, 'twitter_link', true)) { ?>
        <a href="http://<?php echo get_post_meta($post->ID, 'twitter_link', true); ?>">
  				<i class="fa fa-twitter"></i>
  			</a>
        <?php } ?>
  			

        <?php if (get_post_meta($post->ID, 'website', true)) { ?>
        <a href="http://<?php echo get_post_meta($post->ID, 'website', true); ?>">
  				<i class="fa fa-globe"></i>
  			</a>
        <?php } ?>
  		</div>
  	</div>
  	<div class="info">
  		<h2><?php the_title(); ?></h2>
  		<p>HOMETOWN</p>
  		<p><?php echo get_post_meta($post->ID, 'location', true); ?></p>
  		<p class="details"><?php echo get_post_meta($post->ID, 'bio', true); ?></p>
  	</div>
  </div>
</div>


<?php get_footer(); ?>