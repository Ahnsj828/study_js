$(function () {
  // alert("잘 작동하나?");
  // < 메뉴 열고 닫기 >
  $("nav > ul > li").mouseenter(function () {
    // 마우스 오버시
    $(this).children(".sub").stop().slideDown();
  });
  $("nav > ul > li").mouseleave(function () {
    // 마우스 아웃시
    $(".sub").slideUp();
  });

  // < 슬라이드 >
  let i = 0;
  function slide() {
    if (i < 2) {
      i++;
    } else {
      i = 0;
    }
    $(".slide ul").animate({ marginLeft: -1200 * i }, 2000);
  }
  setInterval(slide, 3000);

  // < 팝업창 >
  $(".pop").click(function () {
    $(".popup").show();
    $("body").addClass("dim");
  });
  $(".popup .popup-close").click(function () {
    $(".popup").hide();
    $("body").removeClass("dim");
  });
});
