
$(window).on("scroll", function() {
    var pageScroll = $(window).scrollTop();

    if(pageScroll < 250) {
        $(".DivNavHeaderTrombinoscope").removeClass("active");

        $(".DivNavHeaderAccueil").addClass("active");
    } else if (pageScroll > 250 && pageScroll < 350 ){
       $(".DivNavHeaderProgramme").removeClass("active");
       $(".DivNavHeaderAccueil").removeClass("active");

       $(".DivNavHeaderTrombinoscope").addClass("active");
    
    } else if (pageScroll > 350 && pageScroll < 450 ){
        $(".DivNavHeaderTrombinoscope").removeClass("active");
        $(".DivNavHeaderVideos").removeClass("active");

        $(".DivNavHeaderProgramme").addClass("active");
    } else if (pageScroll > 450 && pageScroll < 550 ){
        $(".DivNavHeaderTrombinoscope").removeClass("active");
        $(".DivNavHeaderVideos").removeClass("active");

        $(".DivNavHeaderVideos").addClass("active");
    } else if (pageScroll > 550 && pageScroll < 650 ){
        $(".DivNavHeaderTrombinoscope").removeClass("active");
        $(".DivNavHeaderVideos").removeClass("active");

        $(".DivNavHeaderVideos").addClass("active");
    } else if (pageScroll > 650 && pageScroll < 750 ){
        $(".DivNavHeaderTrombinoscope").removeClass("active");
        $(".DivNavHeaderVideos").removeClass("active");
        
        $(".DivNavHeaderVideos").addClass("active");
    } 
});


$(window).on("scroll", function() {
    var pageScroll = $(window).scrollTop();

    if(pageScroll < 50) {
        $(".TitreImage").removeClass("LogoImageActive");
        $(".TitreImage").addClass("LogoImageInactive");

        $(".LogoImage").removeClass("LogoImageInactive");
        $(".LogoImage").addClass("LogoImageActive");

        $("#navIcons").removeClass("NavIcons");
        $("#navIcons").addClass("NavIconsInit");
    } else{
        $(".TitreImage").removeClass("LogoImageInactive");
        $(".TitreImage").addClass("LogoImageActive");

        $(".LogoImage").removeClass("LogoImageActive");
        $(".LogoImage").addClass("LogoImageInactive");

        $("#navIcons").removeClass("NavIconsInit");
        $("#navIcons").addClass("NavIcons");
    } 
});