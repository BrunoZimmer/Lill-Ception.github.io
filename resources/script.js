$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".ClassNavHeaderAccueil").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".ClassNavHeaderAccueil").removeClass("active");
    }
});