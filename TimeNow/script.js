const WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function zeroPadding(num, digit) {
  return String(num).padStart(digit, "0");
}

function updateTime() {
  const now = new Date();

  // 시간 표시
  document.getElementById("time").innerText = `${zeroPadding(
    now.getHours(),
    2
  )}:${zeroPadding(now.getMinutes(), 2)}:${zeroPadding(now.getSeconds(), 2)}`;

  // 날짜 표시
  document.getElementById(
    "date"
  ).innerText = `${now.getFullYear()}-${zeroPadding(
    now.getMonth() + 1,
    2
  )}-${zeroPadding(now.getDate(), 2)} ${WEEK[now.getDay()]}`;
}

// 1초마다 시간 업데이트
setInterval(updateTime, 1000);
updateTime(); // 페이지 로딩 시 즉시 실행
