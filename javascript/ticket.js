function cPrice() {
  var start = parseInt(document.getElementById("stationStart").value);
  var end = parseInt(document.getElementById("stationEnd").value);
  var price = 0;
  if (start == 0 || end == 0) {
    alert("請選擇車站");
    return;
  }

  if (start == 1) {
    if (end == 2 || end == 3 || end == 4 || end == 5) {
      price = 20;
    } else if (end == 6 || end == 7) {
      price = 25;
    } else if (end == 8 || end == 9) {
      price = 30;
    } else if (end == 10 || end == 11 || end == 12) {
      price = 35;
    } else if (end == 13) {
      price = 40;
    } else if (end == 14 || end == 15 || end == 16) {
      price = 45;
    } else if (end == 17 || end == 18) {
      price = 50;
    }
  }
  if (start == 2) {
    if (end == 1 || end == 3 || end == 4 || end == 5 || end == 6) {
      price = 20;
    } else if (end == 7 || end == 8) {
      price = 25;
    } else if (end == 9 || end == 10) {
      price = 30;
    } else if (end == 11 || end == 12 || end == 13) {
      price = 35;
    } else if (end == 14) {
      price = 40;
    } else if (end == 15 || end == 16 || end == 17) {
      price = 45;
    } else if (end == 18) {
      price = 50;
    }
  }
  if (start == 3) {
    if (end == 1 || end == 2 || end == 4 || end == 5 || end == 6 || end == 7) {
      price = 20;
    } else if (end == 8 || end == 9) {
      price = 25;
    } else if (end == 10 || end == 11) {
      price = 30;
    } else if (end == 12 || end == 13) {
      price = 35;
    } else if (end == 14 || end == 15) {
      price = 40;
    } else if (end == 16 || end == 17) {
      price = 45;
    } else if (end == 18) {
      price = 50;
    }
  }
  if (start == 4) {
    if (
      end == 1 ||
      end == 2 ||
      end == 3 ||
      end == 5 ||
      end == 6 ||
      end == 7 ||
      end == 8 ||
      end == 9
    ) {
      price = 20;
    } else if (end == 10 || end == 11) {
      price = 25;
    } else if (end == 12 || end == 13) {
      price = 30;
    } else if (end == 14 || end == 15) {
      price = 35;
    } else if (end == 16 || end == 17) {
      price = 40;
    } else if (end == 18) {
      price = 45;
    }
  }
  if (start == 5) {
    if (
      end == 1 ||
      end == 2 ||
      end == 3 ||
      end == 4 ||
      end == 6 ||
      end == 7 ||
      end == 8 ||
      end == 9
    ) {
      price = 20;
    } else if (end == 10 || end == 11 || end == 12) {
      price = 25;
    } else if (end == 13 || end == 14) {
      price = 30;
    } else if (end == 15 || end == 16) {
      price = 35;
    } else if (end == 17 || end == 18) {
      price = 40;
    }
  }
  if (start == 6) {
    if (
      end == 2 ||
      end == 3 ||
      end == 4 ||
      end == 5 ||
      end == 7 ||
      end == 8 ||
      end == 9 ||
      end == 10 ||
      end == 11
    ) {
      price = 20;
    } else if (end == 1 || end == 12 || end == 13) {
      price = 25;
    } else if (end == 14 || end == 15) {
      price = 30;
    } else if (end == 16 || end == 17) {
      price = 35;
    } else if (end == 18) {
      price = 40;
    }
  }
  if (start == 7) {
    if (
      end == 3 ||
      end == 4 ||
      end == 5 ||
      end == 6 ||
      end == 8 ||
      end == 9 ||
      end == 10 ||
      end == 11 ||
      end == 12 ||
      end == 13
    ) {
      price = 20;
    } else if (end == 1 || end == 2 || end == 14) {
      price = 25;
    } else if (end == 15 || end == 16) {
      price = 30;
    } else if (end == 17 || end == 18) {
      price = 35;
    }
  }
  if (start == 8) {
    if (
      end == 4 ||
      end == 5 ||
      end == 6 ||
      end == 7 ||
      end == 9 ||
      end == 10 ||
      end == 11 ||
      end == 12 ||
      end == 13
    ) {
      price = 20;
    } else if (end == 2 || end == 3 || end == 14 || end == 15) {
      price = 25;
    } else if (end == 1 || end == 16 || end == 17) {
      price = 30;
    } else if (end == 18) {
      price = 35;
    }
  }
  if (start == 9) {
    if (
      end == 4 ||
      end == 5 ||
      end == 6 ||
      end == 7 ||
      end == 8 ||
      end == 10 ||
      end == 11 ||
      end == 12 ||
      end == 13 ||
      end == 14
    ) {
      price = 20;
    } else if (end == 3 || end == 15 || end == 16) {
      price = 25;
    } else if (end == 1 || end == 2 || end == 17 || end == 18) {
      price = 30;
    }
  }
  if (start == 10) {
    if (
      end == 6 ||
      end == 7 ||
      end == 8 ||
      end == 9 ||
      end == 11 ||
      end == 12 ||
      end == 13 ||
      end == 14 ||
      end == 15
    ) {
      price = 20;
    } else if (end == 4 || end == 5 || end == 16 || end == 17) {
      price = 25;
    } else if (end == 2 || end == 3 || end == 18) {
      price = 30;
    } else if (end == 1) {
      price = 35;
    }
  }
  if (start == 11) {
    if (
      end == 6 ||
      end == 7 ||
      end == 8 ||
      end == 9 ||
      end == 10 ||
      end == 12 ||
      end == 13 ||
      end == 14 ||
      end == 15 ||
      end == 16
    ) {
      price = 20;
    } else if (end == 4 || end == 5 || end == 17 || end == 18) {
      price = 25;
    } else if (end == 3) {
      price = 30;
    } else if (end == 1 || end == 2) {
      price = 35;
    }
  }
  if (start == 12) {
    if (
      end == 7 ||
      end == 8 ||
      end == 9 ||
      end == 10 ||
      end == 11 ||
      end == 13 ||
      end == 14 ||
      end == 15 ||
      end == 16
    ) {
      price = 20;
    } else if (end == 5 || end == 6 || end == 17 || end == 18) {
      price = 25;
    } else if (end == 4) {
      price = 30;
    } else if (end == 1 || end == 2 || end == 3) {
      price = 35;
    }
  }
  if (start == 13) {
    if (
      end == 7 ||
      end == 8 ||
      end == 9 ||
      end == 10 ||
      end == 11 ||
      end == 12 ||
      end == 14 ||
      end == 15 ||
      end == 16 ||
      end == 17
    ) {
      price = 20;
    } else if (end == 6 || end == 18) {
      price = 25;
    } else if (end == 4 || end == 5) {
      price = 30;
    } else if (end == 2 || end == 3) {
      price = 35;
    } else if (end == 1) {
      price = 40;
    }
  }
  if (start == 14) {
    if (
      end == 9 ||
      end == 10 ||
      end == 11 ||
      end == 12 ||
      end == 13 ||
      end == 15 ||
      end == 16 ||
      end == 17 ||
      end == 18
    ) {
      price = 20;
    } else if (end == 7 || end == 8) {
      price = 25;
    } else if (end == 6) {
      price = 30;
    } else if (end == 4 || end == 5) {
      price = 35;
    } else if (end == 2 || end == 3) {
      price = 40;
    } else if (end == 1) {
      price = 45;
    }
  }
  if (start == 15) {
    if (
      end == 10 ||
      end == 11 ||
      end == 12 ||
      end == 13 ||
      end == 14 ||
      end == 16 ||
      end == 17 ||
      end == 18
    ) {
      price = 20;
    } else if (end == 8 || end == 9) {
      price = 25;
    } else if (end == 6 || end == 7) {
      price = 30;
    } else if (end == 4 || end == 5) {
      price = 35;
    } else if (end == 3) {
      price = 40;
    } else if (end == 1 || end == 2) {
      price = 45;
    }
  }
  if (start == 16) {
    if (
      end == 11 ||
      end == 12 ||
      end == 13 ||
      end == 14 ||
      end == 15 ||
      end == 17 ||
      end == 18
    ) {
      price = 20;
    } else if (end == 9 || end == 10) {
      price = 25;
    } else if (end == 7 || end == 8) {
      price = 30;
    } else if (end == 5 || end == 6) {
      price = 35;
    } else if (end == 4) {
      price = 40;
    } else if (end == 1 || end == 2 || end == 3) {
      price = 45;
    }
  }
  if (start == 17) {
    if (end == 13 || end == 14 || end == 15 || end == 16 || end == 18) {
      price = 20;
    } else if (end == 10 || end == 11 || end == 12) {
      price = 25;
    } else if (end == 8 || end == 9) {
      price = 30;
    } else if (end == 6 || end == 7) {
      price = 35;
    } else if (end == 5 || end == 4) {
      price = 40;
    } else if (end == 2 || end == 3) {
      price = 45;
    } else if (end == 1) {
      price = 50;
    }
  }
  if (start == 18) {
    if (end == 14 || end == 15 || end == 16 || end == 17) {
      price = 20;
    } else if (end == 11 || end == 12 || end == 13) {
      price = 25;
    } else if (end == 9 || end == 10) {
      price = 30;
    } else if (end == 7 || end == 8) {
      price = 35;
    } else if (end == 5 || end == 6) {
      price = 40;
    } else if (end == 4) {
      price = 45;
    } else if (end == 1 || end == 2 || end == 3) {
      price = 50;
    }
  }
  if (start == end) {
    price = "";
    alert("請選擇兩個不同的車站");
    return;
  }
  var startSelect = document.getElementById("stationStart");
  var endSelect = document.getElementById("stationEnd");
  var startOp = startSelect.options[startSelect.selectedIndex].text;
  var endOp = endSelect.options[endSelect.selectedIndex].text;
  var hprice = Math.floor(price / 2);
  document.getElementById("ticketPrice").innerHTML =
    "<p id=sta>" +
    startOp +
    "⮕" +
    endOp +
    "<p/><br/>單程票、電子票證：" +
    price +
    "元<br/>敬老卡、愛心卡、愛心陪伴卡：" +
    hprice +
    "元";
  document.getElementById("sta").style =
    "display:inline; color:white; font-size:2rem;background-color : rgb(0,180,150) ;";
}
