jQuery(function($){
    $("#mobile-nav-opener").click(function(e){
        e.preventDefault();
        $("#mobile-nav").addClass("active")
    })

    $("#mobile-nav-close").click(function(e){
        e.preventDefault();
        $("#mobile-nav").removeClass("active")
    })
})