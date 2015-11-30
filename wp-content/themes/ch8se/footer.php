
    </div><!-- .site-content -->
  </div><!-- wrap -->

  <footer class="site-footer" role="contentinfo">

    <div class="social">
        <p>If you share our vision,<br>follow us</p>
        <a href=""><i class="fa fa-facebook"></i></a>
        <a href=""><i class="fa fa-instagram"></i></a>
        <a href=""><i class="fa fa-twitter"></i></a>
    </div>
    

    <?php if ( is_active_sidebar( 'subscribe-footer' ) ) : ?>
      <div class="subscribe-footer widget-area" role="complementary">
        <?php dynamic_sidebar( 'subscribe-footer' ); ?>
      </div>
    <?php endif; ?>

    <nav class="footer-nav">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Shop</a></li>
        <li><a href="">Shipping and return</a></li>
        <li><a href="">Privacy</a></li>
        <li><a href="">Contact us</a></li>
        <li><a href="">FAQ</a></li>
        <li><a href="">ch8seday</a></li>
        <li><a href="">Ambassadors</a></li>
        <li><a href="">Impact</a></li>
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
<?php wp_footer(); ?>

</body>
</html>
