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
define( 'DB_NAME', 'shop' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'aju.?zMPkoEiLf/)+<FLOOV*xaW%kW,Rgn<;yv>7u.<ATp[HLES.`Pb|yw6EdS0Z' );
define( 'SECURE_AUTH_KEY',  'L:5b**$bECl AWg{HsmZJ0JB38k@Y(+5;5>F3BerOM6l;azSsG)4]6ZYDi8sl3r1' );
define( 'LOGGED_IN_KEY',    'KQ!#1gOIA*wYv/sqI-fP?+wGDy^8X{f;d_GNmGg2jmZWbM-R7em7#@}n6ooKi)wT' );
define( 'NONCE_KEY',        '(;QYA}92}M|C{|?zsja#uxk&8i1H^io C(:W-Pf@Gi$8@EPwzCG9;2%:@zC&(.F.' );
define( 'AUTH_SALT',        'G@IpG.$&No=o78L)WH}P;.YO3$``}P6cTo%#GaJb1?`vS@y:C.i~j>QBqw|jH:+1' );
define( 'SECURE_AUTH_SALT', 'Lc[uk[!*O%sT6Oe]9R31R8wIL.kY&04 :yLbds2Zv^wC8utJtRo>db]CwS|==9v]' );
define( 'LOGGED_IN_SALT',   '}R~Vh>TxW((bAs1hx<<{zD,Ll;M#;1TjC|nH=&%? :-AA8%y8r0c<%2K]{KgT 6H' );
define( 'NONCE_SALT',       '&{yD|:#5t|*-AMlpuPZ{Jy`$f0SfcN{{]s>1EHq07!-3 XOmZ&AXH3C40lolh4,a' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
