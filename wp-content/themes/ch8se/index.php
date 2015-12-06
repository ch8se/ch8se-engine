<?php
/**
 * The main template file.
 */

get_header(); ?>

<div class="content">
  <div class="carousel">
    <div><img src="http://www.ch8se.com/wp-content/uploads/2015/11/homeslider4.jpg"></div>
    <div><img src="http://www.ch8se.com/wp-content/uploads/2015/11/homeslider3.jpg"></div>
    <div><img src="http://www.ch8se.com/wp-content/uploads/2015/11/homeslider2.jpg"></div>
    <div><img src="http://www.ch8se.com/wp-content/uploads/2015/11/homeslider1.jpg"></div>
    <div><img src="http://www.ch8se.com/wp-content/uploads/2015/11/homeslider5.jpg"></div>
  </div>

  <div class="counter-wrap">
    <h1>Instead of spending on ads we...</h1>
    <div class="counter clearfix">
      <span class="trees">Plant trees</span>
      <span class="food">Feed children</span>
      <span class="water">Provide water</span>
    </div>
  </div>

  <div class="block">
    <h1>The most intuitive and transparent way of becoming an activist through your consumer choices.</h1>

    <p>ch8se is the first fashion brand to say no to traditional advertising. Instead we plant trees, feed children and quench thirsts. The drive of our marketing is your good will. This way our products can do amazing things. And through our transparent impact-code system you can always track the impact you make.</p>
    <br><br>
    <p><a href="<?php echo esc_url( home_url( '/impact' ) ); ?>">Learn more</a></p>
  </div>

<img src="http://www.ch8se.com/wp-content/uploads/2015/12/ch8se-infographic.jpg">

</div>
<div id="instafeed"></div>

<?php /*get_sidebar(); */?>
<?php get_footer(); ?>