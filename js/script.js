// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

$(document).ready(function(){
    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        $landing = $("#first-slider .carousel .item"),
        $navBar = $("#navMain.navbar.navbar-main"),
        //Variables on page load
        $myCarousel = $('#carousel-generic'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']"),
        //Property City Names Width
        $propLocation = $('.propSection .mainPage h3'),
        $propImg = $('.propSection .row img').width(),
        //Condo Main Photo Width
        $condoMainImg = $('.condoMainImg'),
        $propWidth = $('.propSection').width(),
        //Facilities Photo Name Width
        $facilityNameWidth = $('#facilitiesSection h4'),
        $facilitiesImg = $('#facilitiesSection .row img').width(),
        //Zoom-in Photos
        $imgBig = $("#imgBig"),
        $overlay = $("#overlay"),
        $overlayContent = $("#overlayContent"),
        //Google Map
        $googleMap = $('#map');

    //alert(windowWidth);

    //Page on Resize
    $(window).on("resize", function() {
        var windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            //Property City Names Width
            $propImg = $('.propSection .row img').width(),
            //Condo Main Photo Width
            $propWidth = $('.propSection').width(),
            //Facilities Photo Name Width
            $facilitiesImg = $('#facilitiesSection .row img').width(),
            //Google Map
            $googleMap = $('#map');

        $landing.css({"height": windowHeight-49, "width": windowWidth});
        $navBar.attr("data-offset-top", (windowHeight - 52));
        //Property City Names Width
        $propLocation.css("width", $propImg);
        //Condo Main Photo Width
        $condoMainImg.css("width", $propWidth-70);
        //Facilities Photo Name Width
        $facilityNameWidth.css("width", $facilitiesImg+4);
        //Google Map
        $googleMap.css("width", $propWidth-70);
    });

    //Landing Page Size
    $landing.css("height",(windowHeight - 49));
    $navBar.attr("data-offset-top",(windowHeight - 52));

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

    //Property City Names Width
    $propLocation.css("width", $propImg);

    //Condo Main Photo Width
    $condoMainImg.css("width", $propWidth-70);

    //Facilities Photo Name Width
    $facilityNameWidth.css("width", $facilitiesImg+4);

    //Zoom-in Photos
    $("#grid img").click(function(){
        $imgBig.attr("src",$(this).prop('src'));
        $overlay.show(350);
        $overlayContent.show(350);
    });

    // Hide Bigger Photos
    $imgBig.click(function(){
        $(this).attr("src", "");
        $overlay.hide();
        $overlayContent.hide();
    });

    //Google Map
    $googleMap.css("width", $propWidth-70);

}); // end ready
