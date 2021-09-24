$(window).ready(function() {

    var percent = 0
    var height = $('.loading .content .tim:nth-child(2)').height()
    $('.loading').delay(11000).fadeOut();
    var loading = setInterval(() => {
        percent += 1
        height -= 1.25
        if (percent == 100) {
            clearInterval(loading)
        }
        $('.loading .content .percent').text(`${percent}%`)
        $('.loading .content .tim:nth-child(2)').height(height);

    }, 100);
})
var deg = 0
setInterval(function() {

    deg = deg + 1

    $('#content .text div')[0].style.background = `linear-gradient(${deg}deg, #ee8c00, #eeeeee, #5cb0bd)`

}, 10)