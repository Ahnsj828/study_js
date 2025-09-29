$(function () {
  // < 메뉴 >
  $("nav>ul>li").mouseover(function () {
    // 마우스 오버시 - 이번엔 mouseenter이 아닌 mouseover를 썼다
    $(".sub, .menuBg").stop().slideDown();
    // 페이지 내 모든 메뉴(.sub)와 배경(.menuBg)이 같이 슬라이드 다운(열기)
  });
  $("nav>ul>li").mouseout(function () {
    // 마우스 아웃시
    $(".sub, .menuBg").stop().slideUp();
    // 페이지 내 모든 메뉴(.sub)와 배경(.menuBg)이 같이 슬라이드 업(닫음)
  });

  // < 슬라이드 >
  // 슬라이드 내 모든 li는 사라지게
  $(".slide ul li").fadeOut();
  // 두번째 슬라이드(1번슬라이드) 나오게
  $(".slide ul li").eq(1).fadeIn();
  // 2초 후 세번째 슬라이드(2번슬라이드) 나오게
  $(".slide ul li").fadeOut();
  $(".slide ul li").eq(2).fadeIn();
  // 2초 후 첫번째 슬라이드(0번슬라이드) 나오게
  $(".slide ul li").fadeOut();
  $(".slide ul li").eq(0).fadeIn();
});
