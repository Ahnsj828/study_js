let value = "B";
switch (value) {
  case "A":
    console.log("A출력");
  case "B":
    console.log("B출력");
  case "C":
    console.log("C출력");
}

console.log("---------------");

let value2 = "A";
switch (value2) {
  case "A":
    console.log("A출력");
    break;
  case "B":
    console.log("B출력");
    break;
  case "C":
    console.log("C출력");
    break;
}

console.log("---------------");

let value3 = "F";
switch (value3) {
  case "A":
    console.log("A출력");
    break;
  case "B":
    console.log("B출력");
    break;
  case "C":
    console.log("C출력");
    break;
  default:
    console.log("어느것도 일치하지 않음");
}

console.log("------------ if-else if-else 문 ------------");

let fruit = "사과";
if (fruit === "사과") {
  console.log("사과입니다.");
} else if (fruit === "배") {
  console.log("배입니다.");
} else if (fruit === "포도") {
  console.log("포도입니다.");
} else {
  console.log("뭔지 모르겠습니다.");
}

console.log("------------ switch 문 ------------");
switch (fruit) {
  default:
    console.log("뭔지 모르겠습니다.");
    break;
  case "배":
    console.log("배입니다.");
    break;
  case "포도":
    console.log("포도입니다");
    break;
  case "사과":
    console.log("설마 사과?");
}
