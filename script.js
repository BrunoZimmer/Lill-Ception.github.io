
$(window).on("scroll", function() {
    var pageScroll = $(window).scrollTop();

    if(pageScroll < 150) {
        $(".DivNavHeaderAccueil").addClass("active");
        $(".DivNavHeaderTrombinoscope").removeClass("active");
    } else if (pageScroll > 150 && pageScroll < 250 ){
        //remove the background property so it comes transparent again (defined in your css)
       $(".DivNavHeaderAccueil").removeClass("active");
       $(".DivNavHeaderTrombinoscope").addClass("active");
    }
});