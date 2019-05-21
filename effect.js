window.onload = function(){
  var con1 = document.getElementById("day");
  con1.style.display = 'none';
  var divsToHide = document.getElementsByClassName("div1");
  for(var i = 0; i < divsToHide.length; i++){
      divsToHide[i].style.display = "none";
  }
  var divsToHide = document.getElementsByClassName("close");
  for(var i = 0; i < divsToHide.length; i++){
      divsToHide[i].style.display = "none";
  }
}
function doDisplay1(){
    var con1 = document.getElementById("day");
    var con2 = document.getElementById("night");

    if(con1.style.display=='none'){
        con1.style.display = 'block';
    }
    else{
        con1.style.display = 'none';
        con2.style.display = 'block';
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}
function doDisplay2(){
  var con2 = document.getElementById("night");
  var con1 = document.getElementById("day");

  if(con2.style.display=='none'){
      con2.style.display = 'block';
  }
  else{
      con2.style.display = 'none';
      con1.style.display = 'block';
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
  }
}

function showDis1() {
  document.getElementById('dis1').style.display = "block";
}
function hideDis1() {
  document.getElementById('dis1').style.display = "none";
}

function showDis2() {
  document.getElementById('dis2').style.display = "block";
}
function hideDis2() {
  document.getElementById('dis2').style.display = "none";
}

function showDis3() {
  document.getElementById('dis3').style.display = "block";
}
function hideDis3() {
  document.getElementById('dis3').style.display = "none";
}

function showDis4() {
  document.getElementById('dis4').style.display = "block";
}
function hideDis4() {
  document.getElementById('dis4').style.display = "none";
}
