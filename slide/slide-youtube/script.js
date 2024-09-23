let currentNum = 0;
setInterval(function () {
  // currentNum++;
  if (currentNum == 4) {
    currentNum = 1;
  } else {
    currentNum++;
  }
  console.log(currentNum);
  document.getElementById("img" + currentNum).classList.add("hide");
}, 3000);
