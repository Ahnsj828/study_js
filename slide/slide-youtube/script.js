let currentNum = 0;

let imgInit = function () {
  if (currentNum != 0) {
    document.getElementById("img" + currentNum).classList.remove("hide");
  }
};

setInterval(function () {
  imgInit();
  if (currentNum == 4) {
    currentNum = 1;
  } else {
    currentNum++;
  }
  console.log(currentNum);
  document.getElementById("img" + currentNum).classList.add("hide");

  let clear = setInterval(function () {
    document
      .getElementById("imgSet")
      .prepend(document.getElementById("img" + currentNum));
    clearInterval(clear);
  }, 1000);
}, 3000);
