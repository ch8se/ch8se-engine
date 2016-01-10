<?php
/**
 * Template Name: Ambassadors
 */

get_header(); ?>

<div class="page-content">
<?php if ( have_posts() ) : while( have_posts() ) : the_post();
     the_content();
endwhile; endif; ?>

<div class="ambassadors text-content white">
  <div class="list-climb">
    <h2>Ambassadors</h2>
    <div class="list-holder">
      <p>Even the greatest movements had their humble beginnings. The firestarters are the early adopters, the crazy ones, the dreamers. Those who believe, even when everyone else is being doubtful. </p>
      <div class="listup">
        <div class="ambassador-holder clearfix">

        

        <?php $args = array( 'post_type' => 'ambassador', 'posts_per_page'=>'-1');
          $loop = new WP_Query( $args );
          while ( $loop->have_posts() ) : $loop->the_post(); ?>
          <div class="ambassador-single" class="ambassador-single">
            <a href="<?php the_permalink(); ?>">
              <?php echo get_the_post_thumbnail( $post->ID, 'medium' ); ?>
              <p><?php the_title(); ?></p>
            </a>
          </div>
        <?php endwhile; ?>



        </div>
      </div>
    </div>
  </div>
</div>
</div>

<?php get_footer(); ?>