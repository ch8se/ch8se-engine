<?php
/**
 * The template for displaying pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other "pages" on your WordPress site will use a different template.
 *
 */

get_header(); ?>


<div class="page-content clearfix">
<?php if ( have_posts() ) : while( have_posts() ) : the_post(); ?>
<?php if( have_rows('slideshow') ) { ?>
    <div class="cta">
        <h3>Choose to be an activist</h3>
        <a href="http://www.ch8se.com/ch8sers/">Join us</a>
    </div>
    <div class="carousel<?php if (!get_field('indiegogo_logo')) { ?> no-indiegogo<?php } ?>">
      <?php while( have_rows('slideshow') ): the_row(); 

        $image = get_sub_field('image'); ?>


        <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt'] ?>" />

      <?php endwhile; ?>
    </div>

    <?php }
     the_content();
endwhile; endif; ?>

</div>


<?php get_footer(); ?>