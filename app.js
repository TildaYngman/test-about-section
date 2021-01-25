var h1 = $("h1")
var line = $("#line")
var shape = $("#shape")
var home = $("#btnMenu")
var aboutText = $("#about-text")

$(document).ready(function(){
    h1.animate({right: "20px"}, 2000, function(){
        line.animate({height: "460px"}, 2000)
    });
});

$(document).ready(function(){
    shape.animate({opacity: "1"}, 4000)
});

$(document).ready(function(){
    aboutText.animate({opacity: "1"}, 4000)
});

$(document).ready(function(){
    home.animate({left: "200px"}, 2000)
});
