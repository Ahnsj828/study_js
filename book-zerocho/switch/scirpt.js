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
