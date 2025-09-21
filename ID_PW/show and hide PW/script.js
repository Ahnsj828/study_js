const pwd = document.getElementById("pwd");
const chk = document.getElementById("chk");

chk.onchange = function (e) {
  pwd.type = chk.checked ? "text" : "password";
};
