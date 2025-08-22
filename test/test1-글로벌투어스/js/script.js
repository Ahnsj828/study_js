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
  // mouseenter 대신 mouseover를 사용해도 되지만 / 쌤은 mouseenter와 mouseleave 를 선호

  // 슬라이드
  // 슬라이드 요소 li 세개가 있다. li들을 움직이는게 아니라 부모인 ul 슬라이드 띠를 움직여야 한다.
  // $(".slide ul").animate({ marginLeft: -1200 }, 2000);
  // ul의 왼쪽 마진을 -1200px로 설정하여 첫번째 li가 보이지 않도록 한다.

  let i = 0;
  // 슬라이드가 몇번째인지 카운트할 변수 i를 선언하고 초기값을 0으로 설정

  function slide() {
    if (i < 2) {
      // i가 2보다 작을 때는
      i++;
      // 증감식을 사용하여 i를 1로 증가시킨다.
      // i가 1이 되면 두번째 li가 보이도록 한다.
      // i++이 실행되어라
    } else {
      // 그 밖의 경우에는 (i가 2 이상이면)
      i = 0;
      // i를 0으로 초기화하여 첫번째 li로 돌아간다.
    }

    $(".slide ul").animate({ marginLeft: -1200 * i }, 2000);
    // -1200 * i; => 계산식을 사용하여 ul의 왼쪽 마진을 설정
    // 처음에는 i가 0이므로 -1200 * 0 = 0px로 설정되어 첫번째 li가 보인다.
    // 2초 후에 -1200 * 1 = -1200px로 설정되어 두번째 li가 보여야 한다.
    // 2초 후에 -1200 * 2 = -2400px로 설정되어 세번째 li가 보여야 한다.

    // slide 함수를 만들고 그 안에 수식을 넣어줘야 한다.
  }

  // 슬라이드 함수를 호출하여 실행한다.
  // slide(); => 이렇게 하면 한번만 실행되므로 setInterval을 사용하여 주기적으로 실행되도록 한다.

  setInterval(slide, 3000);
  // setInterval(함수, 시간) => 주어진 시간마다 함수를 실행한다
  // 여기서는 3초마다 slide 함수를 실행하여 슬라이드가 자동으로 넘어가도록 한다.
  // 3초마다 slide 함수가 실행되면서 i가 증가하고, ul의 왼쪽 마진이 변경되어 슬라이드가 움직인다.
});
