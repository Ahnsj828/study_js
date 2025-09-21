function Solve(val) {
  let v = document.getElementById("ans");
  v.value += val;
}

function Result() {
  let v1 = document.getElementById("ans").value;
  let v2 = eval(v1);
  document.getElementById("ans").value = v2;
}

function Clear() {
  let input = document.getElementById("ans");
  input.value = "";
}

function Back() {
  let back = document.getElementById("ans");
  back.value = back.value.slice(0, -1);
}
