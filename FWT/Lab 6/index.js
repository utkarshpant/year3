// var element_id = null;
// var element_class = null;

// var all = document.getElementsByTagName("*");

// for (var i=0, max=all.length; i < max; i++) {
//      all[i].addEventListener("hover", function() {
//          alert("Hello!!")
//         element_id = all[i].getAttribute('id')
//         element_class = all[i].getAttribute('class')
//         $("#style").animate({
//             fontSize: "38pt"
//         }, 1000)
//         $("#element_id").html(String(element_id))
//         $("#element_type").html(String($(this).prop('nodeName').toLowerCase()))
//         // $("#dollar_styled").css("background", "red")
//         $("#color_prop_box").css('background', String($("#dollar_styled").css("background-color")))
//         $("#element_class").html(element_class)
//      }) 
// }

$("*").hover(function() {
    let element_id = $(this).attr('id')
    let element_class = $(this).attr('class')
    // $("#style").animate({
    //     fontSize: "38pt"
    // }, 1000)
    $("#element_id").html(String(element_id))
    $("#element_type").html(String($(this).prop('nodeName').toLowerCase()))
    // $("#dollar_styled").css("background", "red")
    $("#color_prop_box").css('background', String($(this).css("color")))
    $("#element_class").html(element_class)
    $("#background_prop_box").css("background", String($(this).css("background-color")))
})

// $(".action_button").click(function() {
//     alert("Hello!")
// })

$("#dollar_styled").hover(function() {
    $("#style").animate({
        fontSize: "38pt"
    }, 1000)
    
})

// $("#style").hover(function() {
//     // alert("Hello")
//     element_id = $("#style").attr('id')
//     element_class = $("#style").attr('class')
//     $("#style").animate({
//         fontSize: "38pt"
//     }, 1000)
//     $("#element_id").html(String(element_id))
//     $("#element_type").html(String($(this).prop('nodeName').toLowerCase()))
//     // $("#dollar_styled").css("background", "red")
//     $("#color_prop_box").css('background', String($(element_id).css("background-color")))
//     $("#element_class").html(element_class)
// })

// $("#nav_bar").hover(function() {
//     element_id = $("#nav_bar").attr('id')
//     element_class = $("#nav_bar").attr('class')
//     $("#style").animate({
//         fontSize: "38pt"
//     }, 1000)
//     $("#element_id").html(String(element_id))
//     $("#element_type").html(String($(this).prop('nodeName').toLowerCase()))
//     // $("#dollar_styled").css("background", "red")
//     $("#color_prop_box").css('background', String($("#dollar_styled").css("background-color")))
//     $("#element_class").html(element_class)
// })