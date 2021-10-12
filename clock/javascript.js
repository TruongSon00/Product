const hour = 30,
    minute = 6,
    second = 6;


function clock() {
      var t = new Date()
    var hours = t.getHours()
    var minutes = t.getMinutes()
    var seconds = Math.floor(t.getSeconds())
    hours = hours + minutes / 60
    minutes = minutes + seconds / 60
    $('.clock .tam .hour')[0].style.transform = `rotate(${hours * 30}deg )`
    $('.clock .tam .minute')[0].style.transform = `rotate(${minutes * 6}deg )`
    $('.clock .tam .second')[0].style.transform = `rotate(${seconds * 6}deg )`
}

function audioPlay() {
    $('#myAudio')[0].autoPlay = true
    $('#myAudio')[0].load()
}
setInterval(() => {
    audioPlay()
}, 60000);
setInterval(function() {
    clock()
}, 1000)