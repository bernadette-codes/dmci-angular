// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

$(document).ready(function(){
    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        landing = $("#first-slider .carousel .item"),
        navBar = $(".navbar.navbar-main"),
        //Variables on page load
        $myCarousel = $('#carousel-generic'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']"),
        //Property Locations Width
        $propLocation = $('.propSection h3'),
        $propImg = $('.propSection img').width();

    //alert(windowWidth);

    //Landing Page Size
    landing.css("height",(windowHeight - 49));
    navBar.attr("data-offset-top",(windowHeight - 52));

    //Landing Page on Resize
    $(window).on("resize", function() {
        var windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            $propImg = $('.propSection img').width();
        landing.css({"height": windowHeight-49, "width": windowWidth});
        navBar.attr("data-offset-top", (windowHeight - 52));
        $propLocation.css("width", $propImg);
    });

    // Landing Page Slides backgrounds
        //Function to animate slider captions
        function doAnimations(elems) {
            //Cache the animationend event in a variable
            var animEndEv = 'webkitAnimationEnd animationend';
            elems.each(function () {
                var $this = $(this),
                    $animationType = $this.data('animation');
                $this.addClass($animationType).one(animEndEv, function () {
                    $this.removeClass($animationType);
                });
            });
        } // end doAnimations

        //Initialize carousel
        $myCarousel.carousel();

        //Animate captions in first slide on page load
        doAnimations($firstAnimatingElems);

        //Other slides to be animated on carousel slide event
        $myCarousel.on('slide.bs.carousel', function (e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        });
        $('#carousel-generic').carousel({interval: 0});
    // End of Landing Page Slides backgrounds

    //Property Locations Width
    $propLocation.css("width", $propImg);






    //Contact Section Size
    /*
    $("#contactSection").css("height",(windowHeight - 109));

    //Contact Section on Resize
    $(window).on("resize", function() {
        $("#contactSection").css("height", (windowHeight - 109));
    });
    */

}); // end ready




