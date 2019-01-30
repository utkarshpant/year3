$(".action_button").click(function() {
    alert("Hello!")
})

$(".nav_bar").hover(function() {
    $("nav .helper").fadeToggle()
})

// var counter = 24;
$("#dollar_styled").hover(function() {
    $("#style").animate({
        fontSize: "50pt",
    }, 1000)

    $("#style_helper").fadeToggle()
})