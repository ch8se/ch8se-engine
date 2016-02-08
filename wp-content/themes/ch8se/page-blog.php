<?php
/**
 * Template Name: Blog
 */

get_header(); ?>

	<div class="blog-wrapper">
		<?php while (have_posts()) : the_post(); ?>
		<?php the_content(); ?>
		<?php endwhile; ?>
		<div class="clearfix">
			<?php $args = array('posts_per_page'=>'-1');
        $loop = new WP_Query( $args );
        while ( $loop->have_posts() ) : $loop->the_post(); ?>
					<div class="single-article" style="background-image: url(<?php echo wp_get_attachment_image_src(get_post_thumbnail_id(),'medium', true)[0] ?>)">
						<div class="overflow"></div>
						<div class="article-detail">
							<!-- <p>Lorem ipsum dolor sit amet</p> -->
							<h3><a href=""><?php the_title(); ?></a></h3>
						</div>
					</div>
			<?php endwhile; ?>
		</div>

	</div>



<?php get_footer(); ?>