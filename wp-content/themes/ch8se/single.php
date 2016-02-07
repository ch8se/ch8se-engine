<?php
/**
 * The Template for displaying all single posts
 *
 */

get_header(); ?>

    <div id="primary" class="content-area">
      <?php
        // Start the Loop.
        while ( have_posts() ) : the_post();

          the_post_thumbnail('full'); ?>
          <div id="content" class="text-content" role="main">
          <?php the_title( '<h1 class="entry-title">', '</h1>' );
          the_content();

        endwhile; ?>
        </div><!-- #content -->
    </div><!-- #primary -->

<?php

get_footer();
