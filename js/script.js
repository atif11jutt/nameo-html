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
        var name = $("#fname").val();
        if(name == ""){
            alert("Enter your name!")
            return false;
        }else{
            $.cookie("name", name);
            window.location.href = "video.html";
        }
        
    });

    if($.cookie("name")){
        $("#username").text($.cookie("name"))
    }
})