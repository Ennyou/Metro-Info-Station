news();
var x = 1;
var y = 1;
function news() {
  var news = "";
  if (localStorage.getItem("th1") != undefined) {
    news = localStorage.getItem("th1");
    x += 1;
    document.getElementById("news").innerHTML = "<p>最新消息：" + news + "<p/>";
  }
}

setInterval(function news2() {
  var news = "";
  if (localStorage.getItem("th1") != undefined) {
    news = localStorage.getItem("th1");
    if (localStorage.getItem("th2") != undefined) {
      y = (x % 2) + 1;
      news = localStorage.getItem("th" + y);
      if (localStorage.getItem("th3") != undefined) {
        y = (x % 3) + 1;
        news = localStorage.getItem("th" + y);
        if (localStorage.getItem("th4") != undefined) {
          y = (x % 4) + 1;
          news = localStorage.getItem("th" + y);
          if (localStorage.getItem("th5") != undefined) {
            y = (x % 5) + 1;
            news = localStorage.getItem("th" + y);
            if (localStorage.getItem("th6") != undefined) {
              y = (x % 6) + 1;
              news = localStorage.getItem("th" + y);
              if (localStorage.getItem("th7") != undefined) {
                y = (x % 7) + 1;
                news = localStorage.getItem("th" + y);
                if (localStorage.getItem("th8") != undefined) {
                  y = (x % 8) + 1;
                  news = localStorage.getItem("th" + y);
                  if (localStorage.getItem("th9") != undefined) {
                    y = (x % 9) + 1;
                    news = localStorage.getItem("th" + y);
                    if (localStorage.getItem("th10") != undefined) {
                      y = (x % 10) + 1;
                      news = localStorage.getItem("th" + y);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    x += 1;
    document.getElementById("news").innerHTML = "<p>最新消息：" + news + "<p/>";
  }
}, 3000);
