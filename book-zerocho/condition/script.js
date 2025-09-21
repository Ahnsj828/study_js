// 조건식 ? 참일 때 실행되는 식 : 거짓일때 실행되는 식
console.log(5 > 0 ? "참" : "거짓");
console.log(5 > 7 ? "참" : "거짓");

console.log("---------------------");

let condition = true;
let value = condition ? "참" : "거짓";
console.log(value);

let condition2 = true;
if (condition) {
  console.log("참2");
} else {
  console.log("거짓2");
}

console.log("---------------------");
let A = true;
let B = false;
// let value2 = A ? B ? "둘다 참" : "A만 참" : "A가 거짓"
let value2 = A ? (B ? "둘다 참" : "A만 참") : "A가 거짓";
console.log(value2);
