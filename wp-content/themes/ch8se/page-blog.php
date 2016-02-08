<?php
/**
 * Template Name: Blog
 */

get_header(); ?>

	<div class="blog-wrapper">
		<div class="clearfix">
			<?php $args = array('posts_per_page'=>'-1');
        $loop = new WP_Query( $args );
        while ( $loop->have_posts() ) : $loop->the_post(); ?>
					<div class="single-article">
						<div class="overflow"></div>
						<div class="article-detail">
							<!-- <p>Lorem ipsum dolor sit amet</p> -->
							<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
						</div>
					</div>
			<?php endwhile; ?>
		</div>
	</div>



<?php get_footer(); ?>