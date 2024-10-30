function cTime() {
  var station = parseInt(document.getElementById("stationStart").value);
  var startSelect = document.getElementById("stationStart");
  var startOp = startSelect.options[startSelect.selectedIndex].text;
  if (station == 0) {
    alert("請選擇車站");
  } else if (station == 1) {
    document.getElementById("time").innerHTML = "<p id=sta>" + startOp + "<p/>";
    document.getElementById("time3").innerText = "06:00";
    document.getElementById("time4").innerText = "00:00";
  } else if (station == 2) {
    document.getElementById("time").innerHTML = "<p id=sta>" + startOp + "<p/>";
    document.getElementById("time1").innerText = "06:04";
    document.getElementById("time2").innerText = "00:47";
    document.getElementById("time3").innerText = "06:02";
    document.getElementById("time4").innerText = "00:02";
  } else if (station == 3) {
    document.getElementById("time").innerHTML = "<p id=sta>" + startOp + "<p/>";
    document.getElementById("time1").innerText = "06:02";
    document.getElementById("time2").innerText = "00:45";
    document.getElementById("time3").innerText = "06:04";
    document.getElementById("time4").innerText = "00:04";
  } else if (station == 4) {
    document.getElementById("time").innerHTML = "<p id=sta>" + startOp + "<p/>";
    document.getElementById("time1").innerText = "06:00";
    document.getElementById("time2").innerText = "00:42";
    document.getElementById("time3").innerText = "06:00";
    document.getElementById("time4").innerText = "00:07";
  } else if (station == 5) {
    document.getElementById("time").innerHTML = "<p id=sta>" + startOp + "<p/>";
    document.getElementById("time1").innerText = "06:07";
    document.getElementById("time2").innerText = "00:40";
    document.getElementById("time3").innerText = "06:01";
    document.getElementById("time4").innerText = "00:09";
  } else if (station == 6) {
    document.getElementById("time").innerHTML = "<p id=sta>" + startOp + "<p/>";
    document.getElementById("time1").innerText = "06:05";
    document.getElementById("time2").innerText = "00:38";
    document.getElementById("time3").innerText = "06:04";
    document.getElementById("time4").innerText = "00:11";
  } else if (station == 7) {
    document.getElementById("time").innerHTML = "<p id=sta>" + startOp + "<p/>";
    document.getElementById("time1").innerText = "06:03";
    document.getElementById("time2").innerText = "00:36";
    document.getElementById("time3").innerText = "06:06";
    document.getElementById("time4").innerText = "00:13";
  } else if (station == 8) {
    document.getElementById("time").innerHTML = "<p id=sta>" + startOp + "<p/>";
    document.getElementById("time1").innerText = "06:01";
    document.getElementById("time2").innerText = "00:34";
    document.getElementById("time3").innerText = "06:07";
    document.getElementById("time4").innerText = "00:15";
  } else if (station == 9) {
    document.getElementById("time").innerHTML = "<p id=sta>" + startOp + "<p/>";
    document.getElementById("time1").innerText = "06:00";
    document.getElementById("time2").innerText = "00:33";
    document.getElementById("time3").innerText = "06:00";
    document.getElementById("time4").innerText = "00:17";
  } else if (station == 10) {
    document.getElementById("time").innerHTML = "<p id=sta>" + startOp + "<p/>";
    document.getElementById("time1").innerText = "06:08";
    document.getElementById("time2").innerText = "00:30";
    document.getElementById("time3").innerText = "06:02";
    document.getElementById("time4").innerText = "00:19";
  } else if (station == 11) {
    document.getElementById("time").innerHTML = "<p id=sta>" + startOp + "<p/>";
    document.getElementById("time1").innerText = "06:06";
    document.getElementById("time2").innerText = "00:29";
    document.getElementById("time3").innerText = "06:04";
    document.getElementById("time4").innerText = "00:21";
  } else if (station == 12) {
    document.getElementById("time").innerHTML = "<p id=sta>" + startOp + "<p/>";
    document.getElementById("time1").innerText = "06:04";
    document.getElementById("time2").innerText = "00:27";
    document.getElementById("time3").innerText = "06:05";
    document.getElementById("time4").innerText = "00:22";
  } else if (station == 13) {
    document.getElementById("time").innerHTML = "<p id=sta>" + startOp + "<p/>";
    document.getElementById("time1").innerText = "06:03";
    document.getElementById("time2").innerText = "00:25";
    document.getElementById("time3").innerText = "06:07";
    document.getElementById("time4").innerText = "00:24";
  } else if (station == 14) {
    document.getElementById("time").innerHTML = "<p id=sta>" + startOp + "<p/>";
    document.getElementById("time1").innerText = "06:00";
    document.getElementById("time2").innerText = "00:22";
    document.getElementById("time3").innerText = "06:00";
    document.getElementById("time4").innerText = "00:27";
  } else if (station == 15) {
    document.getElementById("time").innerHTML = "<p id=sta>" + startOp + "<p/>";
    document.getElementById("time1").innerText = "06:05";
    document.getElementById("time2").innerText = "00:20";
    document.getElementById("time3").innerText = "06:01";
    document.getElementById("time4").innerText = "00:29";
  } else if (station == 16) {
    document.getElementById("time").innerHTML = "<p id=sta>" + startOp + "<p/>";
    document.getElementById("time1").innerText = "06:04";
    document.getElementById("time2").innerText = "00:19";
    document.getElementById("time3").innerText = "06:03";
    document.getElementById("time4").innerText = "00:30";
  } else if (station == 17) {
    document.getElementById("time").innerHTML = "<p id=sta>" + startOp + "<p/>";
    document.getElementById("time1").innerText = "06:02";
    document.getElementById("time2").innerText = "00:17";
    document.getElementById("time3").innerText = "06:05";
    document.getElementById("time4").innerText = "00:32";
  } else if (station == 18) {
    document.getElementById("time").innerHTML = "<p id=sta>" + startOp + "<p/>";
    document.getElementById("time1").innerText = "06:00";
    document.getElementById("time2").innerText = "00:15";
  }

  document.getElementById("sta").style =
    "display:inline; color:white; font-size:2rem;background-color : rgb(0,180,150) ; padding:0.5rem;";
  document.getElementById("tableTime").style = "display:inlineblock;";
  document.getElementById("tableTime2").style = "display:inlineblock;";

  if (station == 1) {
    document.getElementById("trTime1").style = "display:none;";
    document.getElementById("trTime2").style = "display:inlineblock;";
  } else if (station == 18) {
    document.getElementById("trTime2").style = "display:none;";
    document.getElementById("trTime1").style = "display:inlineblock;";
  } else {
    document.getElementById("trTime1").style = "display:inlineblock;";
    document.getElementById("trTime2").style = "display:inlineblock;";
  }
  //   document.getElementById("trTime1").style = "display:none;";
}
