var appearRight = document.querySelector('.right');
var appearLeft = document.querySelector('.left');

function appear() {
    var name = document.querySelector('#log-in .name').value;
    var password = document.querySelector('#log-in .password').value;
    var main = '/trang-web-animal/main.html';
    if (name == 'Truong Son') {
        if (password == '123456') {
            document.location.href = main;
        } else {
            appearRight.style.display = 'flex';
            appearLeft.style.display = 'flex';

            setTimeout(function() {
                appearRight.style.display = 'none';
                appearLeft.style.display = 'none';

            }, 5000)
        }
    } else {
        appearRight.style.display = 'flex';
        appearLeft.style.display = 'flex';

        setTimeout(function() {
            appearRight.style.display = 'none';
            appearLeft.style.display = 'none';

        }, 5000)
    }
}
$('#log-in .add').on('click', function() {
    window.location.href = '/trang-web-animal/log-up/form-logup.html'
})