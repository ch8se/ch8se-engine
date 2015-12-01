
    </div><!-- .site-content -->
  </div><!-- wrap -->

  <footer class="site-footer" role="contentinfo">

    <div class="social clearfix">
        <p>If you share our vision,<br>follow us</p>
        <a targe="_blank" href="https://www.facebook.com/ch8seofficial/"><i class="fa fa-facebook"></i></a>
        <a targe="_blank" href="https://www.instagram.com/ch8se/"><i class="fa fa-instagram"></i></a>
        <a targe="_blank" href="https://twitter.com/ch8sedotcom"><i class="fa fa-twitter"></i></a>
    </div>
    

    <?php if ( is_active_sidebar( 'subscribe-footer' ) ) : ?>
      <div class="subscribe-footer widget-area" role="complementary">
        <?php dynamic_sidebar( 'subscribe-footer' ); ?>
      </div>
    <?php endif; ?>

    <nav class="footer-nav">
      <ul>
        <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a></li>
        <li><a href="<?php echo esc_url( home_url( '/products-men' ) ); ?>">Men</a></li>
        <li><a href="<?php echo esc_url( home_url( '/products-woman' ) ); ?>">Woman</a></li>
        <li><a href="<?php echo esc_url( home_url( '/privacy' ) ); ?>">Privacy</a></li>
        <li><a href="<?php echo esc_url( home_url( '/contact-us' ) ); ?>">Contact us</a></li>
        <li><a href="<?php echo esc_url( home_url( '/shipping-and-returns' ) ); ?>">Shipping and return</a></li>
        <li><a href="<?php echo esc_url( home_url( '/ch8seday' ) ); ?>">ch8seday</a></li>
        <li><a href="<?php echo esc_url( home_url( '/about-us' ) ); ?>">About us</a></li>
        <li><a href="<?php echo esc_url( home_url( '/impact' ) ); ?>">Impact</a></li>
      </ul>
    </nav>

    <p class="copyright">&copy; ch8se 2015</p>
  </footer><!-- .site-footer -->

</div><!-- .site -->
<div class="overlay">
  <div class="box plant">
    <h2>Hello ch8ser!</h2>
    <h2>Wanna plant a tree?</h2>
    <p>Let’s make the world a better place. Subscribe and we will send you your first tree planting code. When you redeem it, a tree will be planted, guarded and nurtured to maturity. No purchase necessary.</p>
  </div>
  <div class="box">
    <h2>Hello ch8ser!</h2>
    <p>We will publish our first impact report after our Indiegogo campaign. Subscribe and we will let you know.</p>
    
  </div>
</div>
<?php if ( is_active_sidebar( 'popup' ) ) : ?>
  <div class="subscribe-overlay">
  <div class="popup widget-area" role="complementary">
    <?php dynamic_sidebar( 'popup' ); ?>
  </div>
  </div>
<?php endif; ?>
<?php wp_footer(); ?>

</body>
</html>
