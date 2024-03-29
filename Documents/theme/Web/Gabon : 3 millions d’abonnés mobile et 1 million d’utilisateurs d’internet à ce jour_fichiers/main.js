/**
* @package Helix3 Framework
* @author JoomShaper http://www.joomshaper.com
* @copyright Copyright (c) 2010 - 2015 JoomShaper
* @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or later
*/
jQuery(function($) {

    $('#offcanvas-toggler').on('click', function(event){
        event.preventDefault();
        $('body').addClass('offcanvas');
    });

    $( '<div class="offcanvas-overlay"></div>' ).insertBefore( '.body-innerwrapper > .offcanvas-menu' );

    //$('.offcanvas-menu').append( '<div class="offcanvas-overlay"></div>' );

    $('.close-offcanvas, .offcanvas-overlay').on('click', function(event){
        event.preventDefault();
        $('body').removeClass('offcanvas');
    });
    
    $('a.maximenuck').on('click', function(event){
        $('body').removeClass('offcanvas');
    });

    // sticky menu move in responsive
    //Sticky Menu
    var windowWidth = $(window).width();
    if (windowWidth < 992){
        $("#sp-logo").prependTo("#sp-main-menu .row");
    } 

    //Mega Menu
    $('.sp-megamenu-wrapper').parent().parent().css('position','static').parent().css('position', 'relative');
    $('.sp-menu-full').each(function(){
        $(this).parent().addClass('menu-justify');
    });
    //Sticky Menu
    $(document).ready(function(){
        $("body.sticky-header").find('#sp-main-menu').sticky({topSpacing:0})
    });

    //Search
    $(".icon-search.top-icon").on('click', function(){
        $(".searchwrapper").fadeIn(200);
    });

    $("#search_close").on('click', function(){
        $(".searchwrapper").fadeOut(200);
    });


    // Has carousel category page
    if ( $( "#art-leading-carousel" ).length ) {

        // Get carousel id
        var $artLeadCarousel = $("#art-leading-carousel");
        // carrousel
        $artLeadCarousel.carousel();
        // Prev
        $(".left.art-control").click(function(){
            $artLeadCarousel.carousel('prev');
        });

        // Prev
        $(".right.art-control").click(function(){
            $artLeadCarousel.carousel('next');
        });
    } 

    // Has carousel home and text variation page gellary
    if ( $( '#carousel' ).is( '.flexslider' ) ) {

        // Thumb Gallery
        var $sppbTgOptions = $('.sppb-tg-slider');

        // Autoplay
        var $autoplay   = $sppbTgOptions.data('sppb-tg-autoplay');
        //if ($autoplay == 'true') { var $autoplay = true; } else { var $autoplay = false};

        // arrows
        var $arrows   = $sppbTgOptions.data('sppb-tg-arrows');
        //if ($arrows == 'true') { var $arrows = true; } else { var $arrows = false};

        $(window).load(function(){
          $('#carousel').flexslider({
            animation: 'slide', 
            controlNav: false,
            directionNav: $arrows,
            animationLoop: false,
            slideshow: $autoplay,
            minItems: 5,
            move: 1,
            itemWidth: 129,
            itemMargin: 15,
            asNavFor: '#slider'
        });

        $('#slider').flexslider({
            animation: "fade",
            controlNav: false,
            directionNav: $arrows,
            animationLoop: false,
            slideshow: $autoplay,
            sync: "#carousel"
        });
      });

    }; // END:: has carousel

    // has social share
    if ( $( ".sppb-post-share-social" ).length || $( ".newedge-social-share-icon" ).length) {
        // social share
        $('.prettySocial').prettySocial();
    };

    /*
    $(document).ready(function () {
    var shareUrl = 'http://joomshaper.com';
    $.getJSON('http://share-count.appspot.com/?url=' + encodeURIComponent(shareUrl) + "&callback=?", function (data) {
            shares = data.shares;
            $(".count").each(function (index, el) {
                service = $(el).parents(".share-btn").attr("data-service");
                count = shares[service];
                if(count>1000) {
                    count = (count / 1000).toFixed(1);
                    if(count>1000) count = (count / 1000).toFixed(1) + "M";
                    else count = count + "k";
                }
                $(el).html(count);
            });
        });
    });  */


    //Tooltip
    $('[data-toggle="tooltip"]').tooltip();
    
    /* $(document).on('click', '.sp-rating .star', function(event) {
        event.preventDefault();

        var data = {
            'action':'voting',
            'user_rating' : $(this).data('number'),
            'id' : $(this).closest('.post_rating').attr('id')
        };

        var request = {
                'option' : 'com_ajax',
                'plugin' : 'helix3',
                'data'   : data,
                'format' : 'json'
            };

        $.ajax({
            type   : 'POST',
            data   : request,
            beforeSend: function(){
                $('.post_rating .ajax-loader').show();
            },
            success: function (response) {
                var data = $.parseJSON(response.data);

                $('.post_rating .ajax-loader').hide();

                if (data.status == 'invalid') {
                    $('.post_rating .voting-result').text('You have already rated this entry!').fadeIn('fast');
                }else if(data.status == 'false'){
                    $('.post_rating .voting-result').text('Somethings wrong here, try again!').fadeIn('fast');
                }else if(data.status == 'true'){
                    var rate = data.action;
                    $('.voting-symbol').find('.star').each(function(i) {
                        if (i < rate) {
                           $( ".star" ).eq( -(i+1) ).addClass('active');
                        }
                    });

                    $('.post_rating .voting-result').text('Thank You!').fadeIn('fast');
                }

            },
            error: function(){
                $('.post_rating .ajax-loader').hide();
                $('.post_rating .voting-result').text('Failed to rate, try again!').fadeIn('fast');
            }
        });
    }); */

});