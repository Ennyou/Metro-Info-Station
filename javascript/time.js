function cTime() {
  var start = parseInt(document.getElementById("stationStart").value);
  var end = parseInt(document.getElementById("stationEnd").value);
  var time = 0;
  if (start == 0 || end == 0) {
    alert("請選擇車站");
    return;
  }
  if (start == end) {
    price = "";
    alert("請選擇兩個不同的車站");
    return;
  }

  if (start == 1) {
    if (end == 2) {
      time = 2.5;
    } else if (end == 3) {
      time = 4;
    } else if (end == 4) {
      time = 7;
    } else if (end == 5) {
      time = 9;
    } else if (end == 6) {
      time = 11.5;
    } else if (end == 7) {
      time = 13.5;
    } else if (end == 8) {
      time = 15;
    } else if (end == 9) {
      time = 17;
    } else if (end == 10) {
      time = 19.5;
    } else if (end == 11) {
      time = 21.5;
    } else if (end == 12) {
      time = 23;
    } else if (end == 13) {
      time = 24.5;
    } else if (end == 14) {
      time = 28;
    } else if (end == 15) {
      time = 29.5;
    } else if (end == 16) {
      time = 31.5;
    } else if (end == 17) {
      time = 33;
    } else if (end == 18) {
      time = 35.5;
    }
  } else if (start == 2) {
    if (end == 1) {
      time = 2.5;
    } else if (end == 3) {
      time = 1.5;
    } else if (end == 4) {
      time = 4.5;
    } else if (end == 5) {
      time = 6.5;
    } else if (end == 6) {
      time = 9;
    } else if (end == 7) {
      time = 11;
    } else if (end == 8) {
      time = 12.5;
    } else if (end == 9) {
      time = 14.5;
    } else if (end == 10) {
      time = 17;
    } else if (end == 11) {
      time = 19;
    } else if (end == 12) {
      time = 20.5;
    } else if (end == 13) {
      time = 22;
    } else if (end == 14) {
      time = 25.5;
    } else if (end == 15) {
      time = 27;
    } else if (end == 16) {
      time = 29;
    } else if (end == 17) {
      time = 31;
    } else if (end == 18) {
      time = 33;
    }
  } else if (start == 3) {
    if (end == 1) {
      time = 4;
    } else if (end == 2) {
      time = 1.5;
    } else if (end == 4) {
      time = 3;
    } else if (end == 5) {
      time = 4.5;
    } else if (end == 6) {
      time = 7;
    } else if (end == 7) {
      time = 9;
    } else if (end == 8) {
      time = 11;
    } else if (end == 9) {
      time = 12.5;
    } else if (end == 10) {
      time = 15;
    } else if (end == 11) {
      time = 17;
    } else if (end == 12) {
      time = 18.5;
    } else if (end == 13) {
      time = 20.5;
    } else if (end == 14) {
      time = 23.5;
    } else if (end == 15) {
      time = 25.5;
    } else if (end == 16) {
      time = 27;
    } else if (end == 17) {
      time = 29;
    } else if (end == 18) {
      time = 31.5;
    }
  } else if (start == 4) {
    if (end == 1) {
      time = 7;
    } else if (end == 2) {
      time = 4.5;
    } else if (end == 3) {
      time = 3;
    } else if (end == 5) {
      time = 1.5;
    } else if (end == 6) {
      time = 4;
    } else if (end == 7) {
      time = 6;
    } else if (end == 8) {
      time = 8;
    } else if (end == 9) {
      time = 9.5;
    } else if (end == 10) {
      time = 12;
    } else if (end == 11) {
      time = 14;
    } else if (end == 12) {
      time = 15.5;
    } else if (end == 13) {
      time = 17;
    } else if (end == 14) {
      time = 20.5;
    } else if (end == 15) {
      time = 22.5;
    } else if (end == 16) {
      time = 24;
    } else if (end == 17) {
      time = 26;
    } else if (end == 18) {
      time = 28;
    }
  } else if (start == 5) {
    if (end == 1) {
      time = 9;
    } else if (end == 2) {
      time = 6.5;
    } else if (end == 3) {
      time = 4.5;
    } else if (end == 4) {
      time = 1.5;
    } else if (end == 6) {
      time = 2;
    } else if (end == 7) {
      time = 4;
    } else if (end == 8) {
      time = 6;
    } else if (end == 9) {
      time = 7.5;
    } else if (end == 10) {
      time = 10;
    } else if (end == 11) {
      time = 12;
    } else if (end == 12) {
      time = 13.5;
    } else if (end == 13) {
      time = 15.5;
    } else if (end == 14) {
      time = 18.5;
    } else if (end == 15) {
      time = 20.5;
    } else if (end == 16) {
      time = 22;
    } else if (end == 17) {
      time = 24;
    } else if (end == 18) {
      time = 26.5;
    }
  } else if (start == 6) {
    if (end == 1) {
      time = 11.5;
    } else if (end == 2) {
      time = 9;
    } else if (end == 3) {
      time = 7;
    } else if (end == 4) {
      time = 4;
    } else if (end == 5) {
      time = 2;
    } else if (end == 7) {
      time = 2;
    } else if (end == 8) {
      time = 3.5;
    } else if (end == 9) {
      time = 5;
    } else if (end == 10) {
      time = 8;
    } else if (end == 11) {
      time = 9.5;
    } else if (end == 12) {
      time = 11;
    } else if (end == 13) {
      time = 13;
    } else if (end == 14) {
      time = 16;
    } else if (end == 15) {
      time = 18;
    } else if (end == 16) {
      time = 19.5;
    } else if (end == 17) {
      time = 21.5;
    } else if (end == 18) {
      time = 24;
    }
  } else if (start == 7) {
    if (end == 1) {
      time = 13.5;
    } else if (end == 2) {
      time = 11;
    } else if (end == 3) {
      time = 9;
    } else if (end == 4) {
      time = 6;
    } else if (end == 5) {
      time = 4;
    } else if (end == 6) {
      time = 2;
    } else if (end == 8) {
      time = 1.5;
    } else if (end == 9) {
      time = 3.5;
    } else if (end == 10) {
      time = 6;
    } else if (end == 11) {
      time = 7.5;
    } else if (end == 12) {
      time = 9;
    } else if (end == 13) {
      time = 11;
    } else if (end == 14) {
      time = 14;
    } else if (end == 15) {
      time = 16;
    } else if (end == 16) {
      time = 17.5;
    } else if (end == 17) {
      time = 19.5;
    } else if (end == 18) {
      time = 22;
    }
  } else if (start == 8) {
    if (end == 1) {
      time = 15;
    } else if (end == 2) {
      time = 12.5;
    } else if (end == 3) {
      time = 11;
    } else if (end == 4) {
      time = 8;
    } else if (end == 5) {
      time = 6;
    } else if (end == 6) {
      time = 3.5;
    } else if (end == 7) {
      time = 1.5;
    } else if (end == 9) {
      time = 1.5;
    } else if (end == 10) {
      time = 4;
    } else if (end == 11) {
      time = 6;
    } else if (end == 12) {
      time = 7.5;
    } else if (end == 13) {
      time = 9.5;
    } else if (end == 14) {
      time = 12.5;
    } else if (end == 15) {
      time = 14.5;
    } else if (end == 16) {
      time = 16;
    } else if (end == 17) {
      time = 18;
    } else if (end == 18) {
      time = 20.5;
    }
  } else if (start == 9) {
    if (end == 1) {
      time = 17;
    } else if (end == 2) {
      time = 14.5;
    } else if (end == 3) {
      time = 12.5;
    } else if (end == 4) {
      time = 9.5;
    } else if (end == 5) {
      time = 7.5;
    } else if (end == 6) {
      time = 5;
    } else if (end == 7) {
      time = 3.5;
    } else if (end == 8) {
      time = 1.5;
    } else if (end == 10) {
      time = 2;
    } else if (end == 11) {
      time = 4;
    } else if (end == 12) {
      time = 5.5;
    } else if (end == 13) {
      time = 7;
    } else if (end == 14) {
      time = 10.5;
    } else if (end == 15) {
      time = 12.5;
    } else if (end == 16) {
      time = 14;
    } else if (end == 17) {
      time = 16;
    } else if (end == 18) {
      time = 18;
    }
  } else if (start == 10) {
    if (end == 1) {
      time = 19.5;
    } else if (end == 2) {
      time = 17;
    } else if (end == 3) {
      time = 15;
    } else if (end == 4) {
      time = 12;
    } else if (end == 5) {
      time = 10;
    } else if (end == 6) {
      time = 8;
    } else if (end == 7) {
      time = 6;
    } else if (end == 8) {
      time = 4;
    } else if (end == 9) {
      time = 2;
    } else if (end == 11) {
      time = 1.5;
    } else if (end == 12) {
      time = 3;
    } else if (end == 13) {
      time = 5;
    } else if (end == 14) {
      time = 8;
    } else if (end == 15) {
      time = 10;
    } else if (end == 16) {
      time = 11.5;
    } else if (end == 17) {
      time = 13.5;
    } else if (end == 18) {
      time = 16;
    }
  } else if (start == 11) {
    if (end == 1) {
      time = 21.5;
    } else if (end == 2) {
      time = 19;
    } else if (end == 3) {
      time = 17;
    } else if (end == 4) {
      time = 14;
    } else if (end == 5) {
      time = 12;
    } else if (end == 6) {
      time = 9.5;
    } else if (end == 7) {
      time = 7.5;
    } else if (end == 8) {
      time = 6;
    } else if (end == 9) {
      time = 4;
    } else if (end == 10) {
      time = 1.5;
    } else if (end == 12) {
      time = 1.5;
    } else if (end == 13) {
      time = 3;
    } else if (end == 14) {
      time = 6;
    } else if (end == 15) {
      time = 8;
    } else if (end == 16) {
      time = 10;
    } else if (end == 17) {
      time = 11.5;
    } else if (end == 18) {
      time = 14;
    }
  } else if (start == 12) {
    if (end == 1) {
      time = 23;
    } else if (end == 2) {
      time = 20.5;
    } else if (end == 3) {
      time = 18.5;
    } else if (end == 4) {
      time = 15.5;
    } else if (end == 5) {
      time = 13.5;
    } else if (end == 6) {
      time = 11;
    } else if (end == 7) {
      time = 9;
    } else if (end == 8) {
      time = 7.5;
    } else if (end == 9) {
      time = 5.5;
    } else if (end == 10) {
      time = 3;
    } else if (end == 11) {
      time = 1.5;
    } else if (end == 13) {
      time = 1.5;
    } else if (end == 14) {
      time = 4.5;
    } else if (end == 15) {
      time = 6.5;
    } else if (end == 16) {
      time = 8.5;
    } else if (end == 17) {
      time = 10;
    } else if (end == 18) {
      time = 12.5;
    }
  } else if (start == 13) {
    if (end == 1) {
      time = 24.5;
    } else if (end == 2) {
      time = 22;
    } else if (end == 3) {
      time = 20.5;
    } else if (end == 4) {
      time = 17;
    } else if (end == 5) {
      time = 15.5;
    } else if (end == 6) {
      time = 13;
    } else if (end == 7) {
      time = 11;
    } else if (end == 8) {
      time = 9.5;
    } else if (end == 9) {
      time = 7;
    } else if (end == 10) {
      time = 5;
    } else if (end == 11) {
      time = 3;
    } else if (end == 12) {
      time = 1.5;
    } else if (end == 14) {
      time = 3;
    } else if (end == 15) {
      time = 5;
    } else if (end == 16) {
      time = 6.5;
    } else if (end == 17) {
      time = 8.5;
    } else if (end == 18) {
      time = 10.5;
    }
  } else if (start == 14) {
    if (end == 1) {
      time = 28;
    } else if (end == 2) {
      time = 25.5;
    } else if (end == 3) {
      time = 23.5;
    } else if (end == 4) {
      time = 20.5;
    } else if (end == 5) {
      time = 18.5;
    } else if (end == 6) {
      time = 16;
    } else if (end == 7) {
      time = 14;
    } else if (end == 8) {
      time = 12.5;
    } else if (end == 9) {
      time = 10.5;
    } else if (end == 10) {
      time = 8;
    } else if (end == 11) {
      time = 6;
    } else if (end == 12) {
      time = 4.5;
    } else if (end == 13) {
      time = 3;
    } else if (end == 15) {
      time = 1.5;
    } else if (end == 16) {
      time = 3.5;
    } else if (end == 17) {
      time = 5;
    } else if (end == 18) {
      time = 7.5;
    }
  } else if (start == 15) {
    if (end == 1) {
      time = 29.5;
    } else if (end == 2) {
      time = 27;
    } else if (end == 3) {
      time = 25.5;
    } else if (end == 4) {
      time = 22.5;
    } else if (end == 5) {
      time = 20.5;
    } else if (end == 6) {
      time = 18;
    } else if (end == 7) {
      time = 16;
    } else if (end == 8) {
      time = 14.5;
    } else if (end == 9) {
      time = 12.5;
    } else if (end == 10) {
      time = 10;
    } else if (end == 11) {
      time = 8;
    } else if (end == 12) {
      time = 6.5;
    } else if (end == 13) {
      time = 5;
    } else if (end == 14) {
      time = 1.5;
    } else if (end == 16) {
      time = 1.5;
    } else if (end == 17) {
      time = 3.5;
    } else if (end == 18) {
      time = 5.5;
    }
  } else if (start == 16) {
    if (end == 1) {
      time = 31.5;
    } else if (end == 2) {
      time = 29;
    } else if (end == 3) {
      time = 27;
    } else if (end == 4) {
      time = 24;
    } else if (end == 5) {
      time = 22;
    } else if (end == 6) {
      time = 19.5;
    } else if (end == 7) {
      time = 17.5;
    } else if (end == 8) {
      time = 16;
    } else if (end == 9) {
      time = 14;
    } else if (end == 10) {
      time = 11.5;
    } else if (end == 11) {
      time = 10;
    } else if (end == 12) {
      time = 8.5;
    } else if (end == 13) {
      time = 6.5;
    } else if (end == 14) {
      time = 3.5;
    } else if (end == 15) {
      time = 1.5;
    } else if (end == 17) {
      time = 2;
    } else if (end == 18) {
      time = 4;
    }
  } else if (start == 17) {
    if (end == 1) {
      time = 33;
    } else if (end == 2) {
      time = 31;
    } else if (end == 3) {
      time = 29;
    } else if (end == 4) {
      time = 26;
    } else if (end == 5) {
      time = 24;
    } else if (end == 6) {
      time = 21.5;
    } else if (end == 7) {
      time = 19.5;
    } else if (end == 8) {
      time = 18;
    } else if (end == 9) {
      time = 16;
    } else if (end == 10) {
      time = 13.5;
    } else if (end == 11) {
      time = 11.5;
    } else if (end == 12) {
      time = 10;
    } else if (end == 13) {
      time = 8.5;
    } else if (end == 14) {
      time = 5;
    } else if (end == 15) {
      time = 3.5;
    } else if (end == 16) {
      time = 2;
    } else if (end == 18) {
      time = 2;
    }
  } else if (start == 18) {
    if (end == 1) {
      time = 35.5;
    } else if (end == 2) {
      time = 33;
    } else if (end == 3) {
      time = 31.5;
    } else if (end == 4) {
      time = 28;
    } else if (end == 5) {
      time = 26.5;
    } else if (end == 6) {
      time = 24;
    } else if (end == 7) {
      time = 22;
    } else if (end == 8) {
      time = 20.5;
    } else if (end == 9) {
      time = 18;
    } else if (end == 10) {
      time = 16;
    } else if (end == 11) {
      time = 14;
    } else if (end == 12) {
      time = 12.5;
    } else if (end == 13) {
      time = 10.5;
    } else if (end == 14) {
      time = 7.5;
    } else if (end == 15) {
      time = 5.5;
    } else if (end == 16) {
      time = 4;
    } else if (end == 17) {
      time = 2;
    }
  }
  var startSelect = document.getElementById("stationStart");
  var endSelect = document.getElementById("stationEnd");
  var startOp = startSelect.options[startSelect.selectedIndex].text;
  var endOp = endSelect.options[endSelect.selectedIndex].text;

  document.getElementById("ticketPrice").innerHTML =
    "<p id=sta>" + startOp + "⮕" + endOp + "<p/><br/>乘車時間" + time + "分鐘";
  document.getElementById("sta").style =
    "display:inline; color:white; font-size:2rem;background-color : rgb(0,180,150) ;";
}
