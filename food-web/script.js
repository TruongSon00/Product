// -------------------- header -----------------------

function removeClass(object, name) {
    $(object).removeClass(name);
}

function addClass(object, name) {
    $(object).addClass(name);
}
$('header .toggler').click(function() {
    $('nav').toggleClass('active');
    $('header .toggler').toggleClass('fa-times');
})
$('header nav .item ').click(function() {
    $('nav').removeClass('active');
    $('header .toggler').removeClass('fa-times');
})

$(window).scroll(function() {
    var heightHeader = $('header').height()
    $('nav').removeClass('active');
    $('header .toggler').removeClass('fa-times');
    if ($(window).scrollTop() > heightHeader) {
        $('.btn-home').addClass('active')
    } else {
        $('.btn-home').removeClass('active')
    }
})

// -------------------------- countdown -------------------------
const dates = new Date('jan 1, 2022 00:00:00')
const dateTime = dates.getTime()
var dn, dateNow, countdown, s, m, h, d, w;

function countdowns() {
    dn = new Date()
    dateNow = dn.getTime()
    var x = (dateTime - dateNow) % 1000
    countdown = (dateTime - dateNow) / 1000


    s = Math.round(countdown % 60);

    countdown = countdown / 60;
    m = Math.round(countdown % 60);
    countdown = countdown / 60;
    h = Math.round(countdown % 24);
    countdown = countdown / 24;
    d = Math.round(countdown % 7);

    w = Math.round(countdown / 7);

    $('#sale .countdown .week div').text(w)
    $('#sale .countdown .day div').text(d)
    $('#sale .countdown .hour div').text(h)
    $('#sale .countdown .minute div').text(m)
    $('#sale .countdown .second div').text(s)
}


setInterval(() => {
    countdowns()
}, 1000);

$(window).resize(function() {
    if ($(window).width() < 640) {
        $('#sale .countdown .week span').text('w')
        $('#sale .countdown .day span').text('d')
        $('#sale .countdown .hour span').text('h')
        $('#sale .countdown .minute span').text('m')
        $('#sale .countdown .second span').text('s')
    } else {
        $('#sale .countdown .week span').text('weeks')
        $('#sale .countdown .day span').text('days')
        $('#sale .countdown .hour span').text('hours')
        $('#sale .countdown .minute span').text('minutes')
        $('#sale .countdown .second span').text('seconds')

    }
})