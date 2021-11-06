
$(window).on("scroll", function() {
    var pageScroll = $(window).scrollTop();

    if(pageScroll < 150) {
        $(".DivNavHeaderTrombinoscope").removeClass("active");

        $(".DivNavHeaderAccueil").addClass("active");
    } else if (pageScroll > 150 && pageScroll < 350 ){
       $(".DivNavHeaderProgramme").removeClass("active");
       $(".DivNavHeaderAccueil").removeClass("active");

       $(".DivNavHeaderTrombinoscope").addClass("active");
    
    } else if (pageScroll > 350 && pageScroll < 450 ){
        $(".DivNavHeaderTrombinoscope").removeClass("active");
        $(".DivNavHeaderVideos").removeClass("active");

        $(".DivNavHeaderProgramme").addClass("active");
    } else if (pageScroll > 450 && pageScroll < 550 ){
        $(".DivNavHeaderProgramme").removeClass("active");
        $(".DivNavHeaderEvenements").removeClass("active");

        $(".DivNavHeaderVideos").addClass("active");
    } else if (pageScroll > 550 && pageScroll < 650 ){
        $(".DivNavHeaderVideos").removeClass("active");
        $(".DivNavHeaderSponsors").removeClass("active");

        $(".DivNavHeaderEvenements").addClass("active");
    }  else if (pageScroll > 650){
        $(".DivNavHeaderEvenements").removeClass("active");
        
        $(".DivNavHeaderSponsors").addClass("active");
    } 
});