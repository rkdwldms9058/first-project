$(document).ready(function () {

    // 모바일 햄버거
    $('#header .fa-bars').click(function () {
        $('#header .fa-bars').addClass('active');
        $('#header .nav').addClass('active');
        $('#header .fa-times').addClass('active');
    });

    $('#header .fa-times').click(function () {
        $('#header .fa-bars').removeClass('active');
        $('#header .nav').removeClass('active');
        $('#header .fa-times').removeClass('active');
    });

});