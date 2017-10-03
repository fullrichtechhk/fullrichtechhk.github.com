$(document).ready(function(){
    $("ul.nav li.dropdown").hover(function(){
        $(this).find(".dropdown-menu").stop(true,true).delay(125).fadeIn();
    },function(){
        $(this).find(".dropdown-menu").stop(true,true).delay(125).fadeOut();
    });

    window.sr = ScrollReveal({mobile:true});
    sr.reveal(".fadeInRight",{
        origin:"right",
        distance:"65px",
        duration:750,
        delay:50,
    });
    sr.reveal(".fadeInLeft",{
        origin:"left",
        distance:"65px",
        duration:750,
    });
    sr.reveal(".fadeInTop",{
        origin:"top",
        distance:"25px",
        duration:750,
    });
    sr.reveal(".fadeInAlpha",{
        opacity:0,
        duration:750,
        distance:"0px",
    });
    sr.reveal(".fadeInLeftDelay",{
        origin:"left",
        distance:"65px",
        durartion:750,
        delay:200,
    });
    sr.reveal(".fadeInRightDelay",{
        origin:"right",
        distance:"65px",
        durartion:750,
        delay:200,
    });
		
		
});