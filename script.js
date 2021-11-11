
$(window).on("scroll", function() {
    var pageScroll = $(window).scrollTop();

    if(pageScroll < 250) {
        $(".DivNavHeaderTrombinoscope").removeClass("active");

        $(".DivNavHeaderAccueil").addClass("active");
    } else if (pageScroll > 400 && pageScroll < 3700 ){
       $(".DivNavHeaderProgramme").removeClass("active");
       $(".DivNavHeaderAccueil").removeClass("active");

       $(".DivNavHeaderTrombinoscope").addClass("active");
    
    } else if (pageScroll > 3700 && pageScroll < 4900 ){
        $(".DivNavHeaderTrombinoscope").removeClass("active");
        $(".DivNavHeaderVideos").removeClass("active");

        $(".DivNavHeaderProgramme").addClass("active");
    } else if (pageScroll > 4900 && pageScroll < 5600 ){
        $(".DivNavHeaderProgramme").removeClass("active");
        $(".DivNavHeaderEvenements").removeClass("active");

        $(".DivNavHeaderVideos").addClass("active");
    } else if (pageScroll > 5600 && pageScroll < 6400 ){
        $(".DivNavHeaderVideos").removeClass("active");
        $(".DivNavHeaderSponsors").removeClass("active");

        $(".DivNavHeaderEvenements").addClass("active");
    } else if (pageScroll > 6400 && pageScroll < 8000 ){
        $(".DivNavHeaderEvenements").removeClass("active");
        
        $(".DivNavHeaderSponsors").addClass("active");
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