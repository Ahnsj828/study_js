$(function () {
  // 메뉴
  $("nav>ul>li").mouseenter(function () {
    // 마우스 오버시
    $(this).children(".sub").stop().slideDown();
    // this(예약어)인 li의 자식인 .sub를 슬라이드 다운
  });
  $("nav>ul>li").mouseleave(function () {
    // 마우스 아웃시
    $(".sub").stop().slideUp();
    // this(예약어)인 li를 슬라이드 업
  });
});

// mouseenter 대신 mouseover를 사용해도 되지만 / 쌤은 mouseenter와 mouseleave 를 선호

// mouseennter 대신 mouseover를 사용해도 된다.
// mouseleave 대신 mouseout을 사용해도 된다.
// mouseenter와 mouseleave는 각각 마우스가 요소에 들어올 때와 나갈 때 발생하는 이벤트입니다.
// mouseover와 mouseout은 마우스가 요소에 들어오고 나갈 때 발생하는 이벤트입니다.
// 이 두 쌍의 이벤트는 비슷하지만, mouseenter와 mouseleave는 자식 요소에 대해서는 이벤트가 발생하지 않습니다.

// 위 코드는 jQuery를 사용하여 메뉴에 마우스가 들어오고 나갈 때 서브 메뉴를 슬라이드 효과로 보여주고 숨기는 예시입니다.
// jQuery의 stop() 메서드는 애니메이션을 중지시키는 역할을 합니다.
// slideDown()과 slideUp() 메서드는 각각 요소를 슬라이드 다운하고 슬라이드 업하는 효과를 줍니다.
// 이 코드는 메뉴의 서브 메뉴가 마우스 오버 시 나타나고, 마우스 아웃 시 사라지는 기능을 구현합니다.

// mouseenter 대신 mouseover를 사용할 수도 있습니다.
// mouseover는 마우스가 요소에 들어올 때 발생하며, 자식 요소에도 적용됩니다.
// 반면 mouseenter는 요소에 마우스가 들어올 때만 발생합니다.
// 따라서, 자식 요소에 마우스가 들어올 때도 이벤트가 발생하는 것을 원하지 않는 경우 mouseenter를 사용하는 것이 좋습니다.
// 아래 코드는 mouseover를 사용한 예시입니다.
// $(function () {
//   $("nav>ul>li").mouseover(function () {
//     // 마우스 오버시
//     $(this).children(".sub").stop().slideDown();
//   });
//   $("nav>ul>li").mouseout(function () {
//     // 마우스 아웃시
//     $(this).children(".sub").stop().slideUp();
//   });
// });

// mouseenter와 mouseleave 이벤트는 각각 마우스가 요소에 들어올 때와 나갈 때 발생합니다.
// 이 이벤트들을 사용하여 메뉴의 서브 메뉴를 슬라이드 다운 및 업하는 효과를 구현할 수 있습니다.
// 아래 코드는 jQuery를 사용하여 메뉴에 마우스가 들어오고 나갈 때 서브 메뉴를 슬라이드 효과로 보여주고 숨기는 예시입니다.

// mouseenter, mouseleave 대신 hover를 사용해도 동일한 효과를 낼 수 있습니다.
// mouseenter와 mouseleave는 각각 마우스가 들어올 때와 나갈 때 이벤트를 처리합니다.
// hover는 두 이벤트를 동시에 처리할 수 있는 편리한 방법입니다.
// 아래 코드는 hover를 사용한 예시입니다.

// $(function () {
//   $("nav>ul>li").hover(
//     function () {
//       // 마우스 들어옴
//       $(this).children("ul").stop(true, true).slideDown(300);
//     },
//     function () {
//       // 마우스 나감
//       $(this).children("ul").stop(true, true).slideUp(300);
//     }
//   );
// });
