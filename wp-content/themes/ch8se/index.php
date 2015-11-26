<?php
/**
 * The main template file.
 */

get_header(); ?>

<div class="content">
  <div class="carousel">
    <div><img src="<?php echo get_template_directory_uri() ?>/img/demo/carousel.jpg" alt=""></div>
    <div><img src="<?php echo get_template_directory_uri() ?>/img/demo/carousel.jpg" alt=""></div>
  </div>


  <div class="counter clearfix">
    <span class="trees">250</span>
    <span class="food">80</span>
    <span class="water">117</span>
  </div>

  <div class="block">
    <h1>FASHION REPURPOSED.</h1>

    <p>ch8se is the first fashion brand to say no to traditional advertising. Instead we plant trees, feed children and quench thirsts. The drive of our marketing is your good will. Today, with all the social media, it’s very simple, you help spread the word about us, and we don’t need to spend on ads. This way a single hoodie can plant as many as 93 trees, a t-shirt can provide 46 months of clean water, or feed a child for 20 days.</p>
  </div>

  <!-- <div class="graphic-video">
    <video src="<?php //echo get_template_directory_uri() ?>/video/ch8se-graphic.webm" autoplay loop></video>
  </div> -->
  
  <div class="graphic-slideshow">
    <img src="<?php echo get_template_directory_uri() ?>/img/trees-large.png" alt="">
    <img src="<?php echo get_template_directory_uri() ?>/img/food-large.png" alt="">
    <img src="<?php echo get_template_directory_uri() ?>/img/water-large.png" alt="">
  </div>

</div>
<div id="instafeed"></div>

<div class="iframe-holder">
  <i class="fa fa-times-circle"></i>
  <iframe src="https://www.youtube.com/embed/bAlx_pRYmwg" frameborder="0" allowfullscreen></iframe>
</div>

<?php /*get_sidebar(); */?>
<?php get_footer(); ?>