$(document).ready(function(){
    $(".nav-search").click(function(){
        $(".form-inline").toggle();
    });

    $("a.register-btn").click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1200);
    });
});