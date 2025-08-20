$(function () {
  // 메뉴
  $("nav>ul>li").mouseenter(function () {
    // 마우스 오버시
    $(this).children(".sub").stop().slideDown();
    // 마우스를 올린 해당 this(예약어)인 li의 자식 .sub를 슬라이드 다운(열림)
  });
  $("nav>ul>li").mouseleave(function () {
    // 마우스 아웃시
    $(".sub").stop().slideUp();
    // 페이지 내 모든 .sub를 슬라이드 업(닫음)
  });
});

// mouseenter 대신 mouseover를 사용해도 되지만 / 쌤은 mouseenter와 mouseleave 를 선호
