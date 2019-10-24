
/*---[ Superfish Menu ]---*/
jQuery(function(){
	"use strict";
	jQuery('#navigation ul.menu').superfish({
	delay:       0,								// 0.1 second delay on mouseout 
	animation:   {opacity:'show'},	// fade-in and slide-down animation 
	animationOut:  {opacity:'hide'},
	speed:         1,
	speedOut:      1,
	dropShadows: false,								// disable drop shadows
	autoArrows:true,
	});
});

/*---[ Tabs ]---*/
jQuery(document).ready(function(){
	"use strict";
    jQuery("#tabs li").click(function() {
        jQuery("#tabs li").removeClass('active');
        jQuery(this).addClass("active");
        jQuery(".tab-content").hide();
        var selected_tab = jQuery(this).find("a").attr("href");
        jQuery(selected_tab).fadeIn();
        return false;
    });
});

/*---[ Responsive Nabigation Menu ]---*/ 
jQuery(".st-menu ul li").has('ul').prepend("<span class='side-sub-menu'><i class='fa fa-angle-down'></i></span>");

jQuery('.st-menu ul li .side-sub-menu').click(function() {
	jQuery(this).next().next().slideToggle(300);
	if (jQuery(this).children().hasClass('fa-angle-down')) {
		jQuery(this).children().removeClass('fa-angle-down').addClass('fa-angle-up');
	} else {
		jQuery(this).children().removeClass('fa-angle-up').addClass('fa-angle-down');
	}
});

/*---[ Back to Top Button ]---*/
jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    
    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html,body').animate({scrollTop: 0}, duration);
        return false;
    })
});

/*---[ Widget Slider ]---*/
jQuery(window).load(function(){
	jQuery('.widgetslider').flexslider({
		animation: "fade",
		pauseOnHover: true,
		controlNav: false,
		prevText: "<i class='fa fa-angle-left'></i>",
		nextText: "<i class='fa fa-angle-right'></i>",
		touch: true,
		start: function(slider) {
            jQuery('.widgetslider').removeClass('loading');
		}
	});  
});

/*---[ Gallery Post Format Slider ]---*/
jQuery(window).load(function(){
	jQuery('.galleryslider').flexslider({
		animation: "fade",
		pauseOnHover: true,
		directionNav: true,
		controlNav: false,
		prevText: "<i class='fa fa-angle-left'></i>",
		nextText: "<i class='fa fa-angle-right'></i>",
		touch: true,
		start: function(slider) {
            jQuery('.galleryslider').removeClass('loading');
		}
	});    
});

/*---[ Featured Slider ]---*/
jQuery(window).load(function(){
	jQuery('.featuredslider').flexslider({
		animation: "fade",
		pauseOnHover: true,
		controlNav: false,
		prevText: "<i class='fa fa-angle-left'></i>",
		nextText: "<i class='fa fa-angle-right'></i>",
		touch: true,
		start: function(slider) {
            jQuery('.featured-section-3').removeClass('loading');
		}
	});  
});

/*---[ Gallery Carousel ]---*/
jQuery(document).ready(function($) {
	$(window).load(function(){
		$('.carousel').flexslider({
		animation: "slide",
		animationLoop: false,
		controlNav: false,
		itemWidth: 277,
		itemMargin: 8,
		minItems: 4,
		maxItems: 4,
		slideshow: false,
		prevText: "<i class='fa fa-angle-left'></i>",
		nextText: "<i class='fa fa-angle-right'></i>",
		touch: true,
		});
	});
});

/*---[ Scroller Widget ]---*/
jQuery(document).ready(function($) {
	$(window).load(function(){
		$('.scroller').flexslider({
		animation: "slide",
		animationLoop: true,
		controlNav: true,
		directionNav: false,
		itemWidth: 277,
		itemMargin: 10,
		minItems: 4,
		maxItems: 4,
		slideshow: true,
		slideshowSpeed: 5000,
		prevText: "<i class='fa fa-angle-left'></i>",
		nextText: "<i class='fa fa-angle-right'></i>",
		});
	});
});

/*---[ Related Posts Carousel ]---*/
jQuery(document).ready(function($) {
	$(window).load(function(){
		$('.relatedPosts').flexslider({
		animation: "slide",
		animationLoop: false,
		controlNav: false,
		itemWidth: 190,
		itemMargin: 7,
		minItems: 3,
		maxItems: 3,
		slideshow: false,
		prevText: "<i class='fa fa-angle-left'></i>",
		nextText: "<i class='fa fa-angle-right'></i>",
		});
	});
});

/*---[ Cover Image ]---*/
jQuery(document).ready(function(){
    jQuery('.cover-image').each(function(){
        var $bgobj = jQuery(this); // assigning the object
     
        jQuery(window).scroll(function() {
            var yPos = -(jQuery(window).scrollTop() / $bgobj.data('speed')); 
             
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });    
});

/*---[ Tipsy ]---*/
jQuery('.module-e-title').tipsy({gravity: 's'});
jQuery('.layout-widget .module-links span').tipsy({gravity: 's'});

/*---[ Fitvids ]---*/
jQuery(document).ready(function( $ ){
	$("body").fitVids( {
		customSelector: [
			"iframe[src*='youtu.be']",
			"iframe[src*='soundcloud.com']",
			"iframe[src*='blip.tv']",
			"iframe[src*='dailymotion.com']",
			"iframe[src*='metacafe.com']",
			"iframe[src*='vimeo.com']",
			"iframe[src*='spotify.com']",
			"iframe[src*='slideshare.net']",
		]
	} );
	$( ".wp-video-shortcode, .wp-audio-shortcode" ).css( 'max-width', '100%' );
});