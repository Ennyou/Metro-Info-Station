checklogin();
function checklogin() {
  if (localStorage.getItem("login") == "true") {
    document.getElementById("logout").style = "display:block;";
    document.getElementById("login").style = "display:none;";
  } else {
  }
}

function logout() {
  if (confirm("確定要登出嗎")) {
    localStorage.removeItem("user");
    localStorage.removeItem("login");
    alert("登出成功");
  }
}
