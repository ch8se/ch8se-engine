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
        <div class="amb-holder clearfix">
          <div class="amb-indiv">
            <a href="">
              <img src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/ch8se/img/demo/ambassador.jpg">
              <p>Steve House</p>
            </a>
          </div>
           <div class="amb-indiv">
            <a href=""><img src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/ch8se/img/demo/ambassador.jpg"></a>
            <p>Steve House</p>
          </div>
           <div class="amb-indiv">
            <a href=""><img src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/ch8se/img/demo/ambassador.jpg"></a>
            <p>Steve House</p>
          </div>
           <div class="amb-indiv">
            <a href=""><img src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/ch8se/img/demo/ambassador.jpg"></a>
            <p>Steve House</p>
          </div>
           <div class="amb-indiv">
            <a href=""><img src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/ch8se/img/demo/ambassador.jpg"></a>
            <p>Steve House</p>
          </div>
           <div class="amb-indiv">
            <a href=""><img src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/ch8se/img/demo/ambassador.jpg"></a>
            <p>Steve House</p>
          </div>
           <div class="amb-indiv">
            <a href=""><img src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/ch8se/img/demo/ambassador.jpg"></a>
            <p>Steve House</p>
          </div>
           <div class="amb-indiv">
            <a href=""><img src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/ch8se/img/demo/ambassador.jpg"></a>
            <p>Steve House</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<?php get_footer(); ?>