$(document).ready(function () {

  // slide toggle
  $("#header .gnb .lnb").hover(function(){
    $(this).children(".snb").stop().slideToggle();
  });


  // 탭메뉴 구현
  $(".tab_title li").click(function () {
    var idx = $(this).index();
    $(".tab_title li").removeClass("on");
    $(".tab_title li").eq(idx).addClass("on");
    $(".tab_cont").hide();
    $(".tab_cont").eq(idx).show();
  })

  // popup toggle
  $("#header .top_h .r_nav .login>a").click(function () {
    $("#login_popup").show();
  })

  $("#login_popup .pic .fa-times").click(function () {
    $("#login_popup").hide();
  })

  // popup toggle
  $("#verification_coin .container .share").click(function () {
    $("#share_popup").show();
  })

  $("#share_popup .fa-times").click(function () {
    $("#share_popup").hide();
  })

  // popup toggle
  $("#key_information .fa-bars").click(function () {
    $("#aside").show();
  })

  $("#aside .fa-times").click(function () {
    $("#aside").hide();
  })

  // popup toggle
  $("#verification_coin .container .fa-ellipsis-v").click(function () {
    $(this).siblings(".menu_icon").slideToggle(0.5);
  })
});