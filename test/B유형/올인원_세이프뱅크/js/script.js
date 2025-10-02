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
  // 변수 선언
  let i = 0;
  function slide() {
    if (i < 2) {
      i++;
    } else {
      i = 0;
    }

    $(".slide ul li").fadeOut();
    $(".slide ul li").eq(i).fadeIn();
  }

  setInterval(slide, 3000);
});
