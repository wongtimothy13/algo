
$("#s1").click(function(){
    $("#panel1").slideToggle("linear");
});

$("#s2").click(function(){
    $("#panel2").slideToggle("linear");
});

$("#s3").click(function(){
    $("#panel3").slideToggle("linear");
});

$("#s4").click(function(){
    $("#panel4").slideToggle("linear");
});

$("#s5").click(function(){
    $("#panel5").slideToggle("linear");
});

$("#im1").hover(
    function() {
        $(this).attr("src", "./images/flap.gif")
    },
    function() {
        $(this).attr("src", "./images/flap.png")
    }
)

$("#im2").hover(
    function() {
        $(this).attr("src", "./images/pathJS.gif")
    },
    function() {
        $(this).attr("src", "./images/pathJS.png")
    }
)

$("#im3").hover(
    function() {
        $(this).attr("src", "./images/conv.gif")
    },
    function() {
        $(this).attr("src", "./images/conv.png")
    }
)

