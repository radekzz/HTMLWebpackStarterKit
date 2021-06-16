import $ from 'jquery';
import './jquery-init.js';
import './test.js';

$(window).on('resize', function() {
    let $windowWidth = $(this).width();
 
    console.log($windowWidth);
});
