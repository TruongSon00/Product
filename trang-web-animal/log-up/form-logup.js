var input = $('input.input')
var error = $('.error')
var succes = $('.succes')
var iError = $('i.fa-exclamation-triangle')
input.focusout(function() {

    if (this.value == '') {
        $(this).parent().parent().children('.error').css({
            'display': 'block'
        })
        $(this).parent().children('i.fa').css({
            'display': 'block'
        })
        $(this).addClass('loi');
        $(this).parent().parent().children('.succes').css({
            'display': 'none'
        })
    } else {
        $(this).parent().parent().children('.succes').css({
            'display': 'block'
        })
    }
})
input.on('input', function() {


    $(this).parent().parent().children('.error').css({
        'display': 'none'
    })
    $(this).parent().children('i.fa').css({
        'display': 'none'
    })
    $(this).removeClass('loi');

})


function check(inputElement) {

    for (x of inputElement) {
        if (x.value == '') {
            return false
        }
    }
    return true
}
$('.btn').on('click', function() {
    if (check(input)) {
        window.location.href = '/trang-web-animal/index.html'
    } else {
        alert('sai')
    }
})