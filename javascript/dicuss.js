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
document.getElementById("th6").innerText = localStorage.getItem("th6");
document.getElementById("td6").innerText = localStorage.getItem("td6");
document.getElementById("tu6").innerText = localStorage.getItem("tu6");
document.getElementById("tt6").innerText = localStorage.getItem("tt6");
document.getElementById("th7").innerText = localStorage.getItem("th7");
document.getElementById("td7").innerText = localStorage.getItem("td7");
document.getElementById("tu7").innerText = localStorage.getItem("tu7");
document.getElementById("tt7").innerText = localStorage.getItem("tt7");
document.getElementById("th8").innerText = localStorage.getItem("th8");
document.getElementById("td8").innerText = localStorage.getItem("td8");
document.getElementById("tu8").innerText = localStorage.getItem("tu8");
document.getElementById("tt8").innerText = localStorage.getItem("tt8");
document.getElementById("th9").innerText = localStorage.getItem("th9");
document.getElementById("td9").innerText = localStorage.getItem("td9");
document.getElementById("tu9").innerText = localStorage.getItem("tu9");
document.getElementById("tt9").innerText = localStorage.getItem("tt9");
document.getElementById("th10").innerText = localStorage.getItem("th10");
document.getElementById("td10").innerText = localStorage.getItem("td10");
document.getElementById("tu10").innerText = localStorage.getItem("tu10");
document.getElementById("tt10").innerText = localStorage.getItem("tt10");
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
        } else if (localStorage.getItem("th6") == undefined) {
          var dcTitle = document.getElementById("dcTitle").value;
          var dcContent = document.getElementById("dcContent").value;
          localStorage.setItem("th6", dcTitle);
          localStorage.setItem("td6", dcContent);
          localStorage.setItem("tu6", localStorage.getItem("user"));
          localStorage.setItem("tt6", new Date());
          location.reload();
        } else if (localStorage.getItem("th7") == undefined) {
          var dcTitle = document.getElementById("dcTitle").value;
          var dcContent = document.getElementById("dcContent").value;
          localStorage.setItem("th7", dcTitle);
          localStorage.setItem("td7", dcContent);
          localStorage.setItem("tu7", localStorage.getItem("user"));
          localStorage.setItem("tt7", new Date());
          location.reload();
        } else if (localStorage.getItem("th8") == undefined) {
          var dcTitle = document.getElementById("dcTitle").value;
          var dcContent = document.getElementById("dcContent").value;
          localStorage.setItem("th8", dcTitle);
          localStorage.setItem("td8", dcContent);
          localStorage.setItem("tu8", localStorage.getItem("user"));
          localStorage.setItem("tt8", new Date());
          location.reload();
        } else if (localStorage.getItem("th9") == undefined) {
          var dcTitle = document.getElementById("dcTitle").value;
          var dcContent = document.getElementById("dcContent").value;
          localStorage.setItem("th9", dcTitle);
          localStorage.setItem("td9", dcContent);
          localStorage.setItem("tu9", localStorage.getItem("user"));
          localStorage.setItem("tt9", new Date());
          location.reload();
        } else if (localStorage.getItem("th10") == undefined) {
          var dcTitle = document.getElementById("dcTitle").value;
          var dcContent = document.getElementById("dcContent").value;
          localStorage.setItem("th10", dcTitle);
          localStorage.setItem("td10", dcContent);
          localStorage.setItem("tu10", localStorage.getItem("user"));
          localStorage.setItem("tt10", new Date());
        }
      }
    }
  }
  location.reload();
}
function del() {
  if (confirm("確定刪除所有文章？")) {
    for (let i = 1; i <= 10; i++) {
      localStorage.removeItem("th" + i);
      localStorage.removeItem("td" + i);
      localStorage.removeItem("tu" + i);
      localStorage.removeItem("tt" + i);
    }
    location.reload();
  }
}
