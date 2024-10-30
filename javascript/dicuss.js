if (localStorage.getItem("th1") != undefined) {
  document.getElementById("dcTable").style = "display:inline;";
}

document.getElementById("th1").innerText = localStorage.getItem("th1");
document.getElementById("td1").innerText = localStorage.getItem("td1");
document.getElementById("tu1").innerText = localStorage.getItem("tu1");
document.getElementById("tt1").innerText = localStorage.getItem("tt1");
document.getElementById("th2").innerText = localStorage.getItem("th2");
document.getElementById("td2").innerText = localStorage.getItem("td2");
document.getElementById("tu2").innerText = localStorage.getItem("tu2");
document.getElementById("tt2").innerText = localStorage.getItem("tt2");
document.getElementById("th3").innerText = localStorage.getItem("th3");
document.getElementById("td3").innerText = localStorage.getItem("td3");
document.getElementById("tu3").innerText = localStorage.getItem("tu3");
document.getElementById("tt3").innerText = localStorage.getItem("tt3");
document.getElementById("th4").innerText = localStorage.getItem("th4");
document.getElementById("td4").innerText = localStorage.getItem("td4");
document.getElementById("tu4").innerText = localStorage.getItem("tu4");
document.getElementById("tt4").innerText = localStorage.getItem("tt4");
document.getElementById("th5").innerText = localStorage.getItem("th5");
document.getElementById("td5").innerText = localStorage.getItem("td5");
document.getElementById("tu5").innerText = localStorage.getItem("tu5");
document.getElementById("tt5").innerText = localStorage.getItem("tt5");

if (localStorage.getItem("user") == "admin") {
  document.getElementById("trashcan").style = "display:inline;";
}

function discuss() {
  if (localStorage.getItem("user") == undefined) {
    alert("請先登入");
  } else {
    if (
      document.getElementById("dcTitle").value == "" ||
      document.getElementById("dcContent").value == ""
    ) {
      alert("標題及內容不得為空");
    } else {
      if (confirm("確定發表？")) {
        if (localStorage.getItem("th1") == undefined) {
          var dcTitle = document.getElementById("dcTitle").value;
          var dcContent = document.getElementById("dcContent").value;
          localStorage.setItem("th1", dcTitle);
          localStorage.setItem("td1", dcContent);
          localStorage.setItem("tu1", localStorage.getItem("user"));
          localStorage.setItem("tt1", new Date());
        } else if (localStorage.getItem("th2") == undefined) {
          var dcTitle = document.getElementById("dcTitle").value;
          var dcContent = document.getElementById("dcContent").value;
          localStorage.setItem("th2", dcTitle);
          localStorage.setItem("td2", dcContent);
          localStorage.setItem("tu2", localStorage.getItem("user"));
          localStorage.setItem("tt2", new Date());
        } else if (localStorage.getItem("th3") == undefined) {
          var dcTitle = document.getElementById("dcTitle").value;
          var dcContent = document.getElementById("dcContent").value;
          localStorage.setItem("th3", dcTitle);
          localStorage.setItem("td3", dcContent);
          localStorage.setItem("tu3", localStorage.getItem("user"));
          localStorage.setItem("tt3", new Date());
        } else if (localStorage.getItem("th4") == undefined) {
          var dcTitle = document.getElementById("dcTitle").value;
          var dcContent = document.getElementById("dcContent").value;
          localStorage.setItem("th4", dcTitle);
          localStorage.setItem("td4", dcContent);
          localStorage.setItem("tu4", localStorage.getItem("user"));
          localStorage.setItem("tt4", new Date());
        } else if (localStorage.getItem("th5") == undefined) {
          var dcTitle = document.getElementById("dcTitle").value;
          var dcContent = document.getElementById("dcContent").value;
          localStorage.setItem("th5", dcTitle);
          localStorage.setItem("td5", dcContent);
          localStorage.setItem("tu5", localStorage.getItem("user"));
          localStorage.setItem("tt5", new Date());
        }
        location.reload();
      }
    }
  }
}
function del() {
  if (confirm("確定刪除所有文章？")) {
    localStorage.removeItem("th1");
    localStorage.removeItem("td1");
    localStorage.removeItem("tu1");
    localStorage.removeItem("tt1");
    localStorage.removeItem("th2");
    localStorage.removeItem("td2");
    localStorage.removeItem("tu2");
    localStorage.removeItem("tt2");
    localStorage.removeItem("th3");
    localStorage.removeItem("td3");
    localStorage.removeItem("tu3");
    localStorage.removeItem("tt3");
    localStorage.removeItem("th4");
    localStorage.removeItem("td4");
    localStorage.removeItem("tu4");
    localStorage.removeItem("tt4");
    localStorage.removeItem("th5");
    localStorage.removeItem("td5");
    localStorage.removeItem("tu5");
    localStorage.removeItem("tt5");
    location.reload();
  }
}
