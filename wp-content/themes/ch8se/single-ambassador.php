<?php

get_header(); ?>


<?php if( have_rows('slideshow') ) { ?>
<div class="content ambassador">
  <div class="banner">
    <div class="carousel no-indiegogo">
      <?php while( have_rows('slideshow') ): the_row(); 

        $image = get_sub_field('image'); ?>


        <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt'] ?>" />

      <?php endwhile; ?>
    </div>
  </div>

<?php } else { ?>
<div class="content ambassador no-banner">
<?php } ?>

  <div class="biography clearfix">
  	<div class="profile-picture">
  		<img src="<?php echo wp_get_attachment_image_src(get_post_thumbnail_id(),'medium', true)[0]; ?>" alt="<?php the_title(); ?>">
  		<div class="social invert sing">
  			

        <?php if (get_post_meta($post->ID, 'facebook_link', true)) { ?>
        <a href="http://<?php echo get_post_meta($post->ID, 'facebook_link', true); ?>" target="_blank">
  				<i class="fa fa-facebook"></i>
  			</a>
        <?php } ?>
  			

        <?php if (get_post_meta($post->ID, 'instagram_link', true)) { ?>
        <a href="http://www.instagram.com/<?php echo get_post_meta($post->ID, 'instagram_link', true); ?>" target="_blank">
  				<i class="fa fa-instagram"></i>
  			</a>
        <?php } ?>
  			

        <?php if (get_post_meta($post->ID, 'twitter_link', true)) { ?>
        <a href="http://<?php echo get_post_meta($post->ID, 'twitter_link', true); ?>" target="_blank">
  				<i class="fa fa-twitter"></i>
  			</a>
        <?php } ?>
  			

        <?php if (get_post_meta($post->ID, 'website', true)) { ?>
        <a href="http://<?php echo get_post_meta($post->ID, 'website', true); ?>" target="_blank">
          <i class="fa fa-globe"></i>
        </a>
        <?php } ?>


        <?php if (get_post_meta($post->ID, 'tumblr_link', true)) { ?>
        <a href="http://<?php echo get_post_meta($post->ID, 'tumblr_link', true); ?>" target="_blank">
          <i class="fa fa-tumblr"></i>
        </a>
        <?php } ?>


        <?php if (get_post_meta($post->ID, 'youtube_link', true)) { ?>
        <a href="http://<?php echo get_post_meta($post->ID, 'youtube_link', true); ?>" target="_blank">
          <i class="fa fa-youtube"></i>
        </a>
        <?php } ?>


        <?php if (get_post_meta($post->ID, 'snapchat_link', true)) { ?>
        <span class="snapchat" href="http://<?php echo get_post_meta($post->ID, 'snapchat_link', true); ?>">
  		    
        </span>
        <?php } ?>



  		</div>
  	</div>
  	<div class="info">
  		<h2><?php the_title(); ?></h2>
  		<p><?php echo get_post_meta($post->ID, 'location', true); ?></p>
  		<p class="details"><?php echo get_post_meta($post->ID, 'bio', true); ?></p>
  	</div>
  </div>

  <?php if (get_post_meta($post->ID, 'instagram_link', true)) { ?>
  <div class="instafeed tag-feed" data-user-name="<?php echo get_post_meta($post->ID, 'instagram_link', true); ?>" data-limit="10"></div>
  <?php } ?>
</div>


<?php get_footer(); ?>