$('.switch .btn').click(function() {
    $('.switch .btn').toggleClass('active')
    $('.buld').toggleClass('active')
    $('body').toggleClass('active')
    $('#ngu')[0].play()
})