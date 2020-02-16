<?php

add_action('wp_enqueue_scripts','my_theme_enqueue_styles');

function my_theme_enqueue_styles() {
    wp_enqueue_style('rootcss', get_template_directory_uri().'/style.css');
    wp_enqueue_style('child-style', get_stylesheet_directory_uri().'/style.css');
    wp_enqueue_style( 'load-font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' );

    
}




?>