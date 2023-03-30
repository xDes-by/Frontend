$(document).ready(function () {
    var navigation = $('.navigation');
    var close = $('.close');
    navigation.click(function () {
        navigation.addClass('active');
    });
    close.click(function () {
        navigation.removeClass('active');
    });
});