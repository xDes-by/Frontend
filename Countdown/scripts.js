let days = $('#days');
let hours = $('#hours');
let minutes = $('#minutes');
let seconds = $('#seconds');

let dd = $('#dd');
let hh = $('#hh');
let mm = $('#mm');
let ss = $('#ss');

let day_dot = $('.day_dot').eq(0);
let hr_dot = $('.hr_dot').eq(0);
let min_dot = $('.min_dot').eq(0);
let sec_dot = $('.sec_dot').eq(0);

let endDate = '01/01/2024 00:00:00';

let x = setInterval(function () {
    let now = new Date(endDate).getTime();
    let countDown = new Date().getTime();
    let distance = now - countDown;

    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / 1000);

    days.html(d + "<br><span>Days<span>");
    hours.html(h + "<br><span>Hours<span>");
    minutes.html(m + "<br><span>Minutes<span>");
    seconds.html(s + "<br><span>Seconds<span>");

    dd[0].style.strokeDashoffset = 440 - (440 * d) / 365;
    hh[0].style.strokeDashoffset = 440 - (440 * h) / 24;
    mm[0].style.strokeDashoffset = 440 - (440 * m) / 60;
    ss[0].style.strokeDashoffset = 440 - (440 * s) / 60;

    day_dot.css('transform', `rotateZ(${d * 0.986}deg)`);
    hr_dot.css('transform', `rotateZ(${h * 15}deg)`);
    min_dot.css('transform', `rotateZ(${m * 6}deg)`);
    sec_dot.css('transform', `rotateZ(${s * 6}deg)`);

    if (distance < 0) {
        clearInterval(x);
        $('#time').css('display', 'none');
        $('.newYear').css('display', 'block');
    }
});