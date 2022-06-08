jQuery(function($){
    $("#mobile-nav-opener").click(function(e){
        e.preventDefault();
        $("#mobile-nav").addClass("active")
    })

    $("#mobile-nav-close").click(function(e){
        e.preventDefault();
        $("#mobile-nav").removeClass("active")
    })

    $("#play").click(function () {
        $.cookie("name", $("#fname").val());
        window.location.href = "video.html";
    });

    if($.cookie("name")){
        $("#username").text($.cookie("name"))
    }
})