<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'choose');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'FU:bqu&>:>+Wo=0- }fM9NHu(ti{+^ac| >T}IYH5:zW4&^3;L6mp>*vm|nCAtM9');
define('SECURE_AUTH_KEY',  'jmA6->;(Cl~M(Xv}XzxDf6L wu65^etPNf!S/YXH;PI[A<;YH`*J/:2+<.h`d- $');
define('LOGGED_IN_KEY',    '7`/|d9Wc5#!JQ/6h%}gpOqyH8t%mX$|yA:nF|<jI |RH]A9Bs`Y6kben/UbG<MCF');
define('NONCE_KEY',        '/#peX?R|-b0d*n70i(k>?&[a%)Gi{+F_-(_o+4Xz@(/{.QMaq,bxZM5llL[U4+1p');
define('AUTH_SALT',        'iL$M[XB;-qOk:v1+CwdDaj-)~i3~>yxPz+Sh{fQ%1* 4:dTp;9]xN}8yv~(Y|t4~');
define('SECURE_AUTH_SALT', '0DlIvAU.]pI~=i-51qvFm[zJu<0-c}br8kAojh*r8qE!4Qnwh8+Oyz^OT=nrilF+');
define('LOGGED_IN_SALT',   'E>J<}y)|{Thg{s=jgzc+HWaUpS#?/f>mT/cdp_{d!12(]:%o-NE*<:h]p}EjCOrE');
define('NONCE_SALT',       'zvJ=.pCS7a-`I1$^?%=(,V0,$6}ZU,QN|<@pp<,cCwO-c8Ujv=6$QqBQ[2uZ4%C*');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
