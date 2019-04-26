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

function showNhideDis1() {
  con1 = document.getElementById("dis1");
  con2 = document.getElementById("open1");
  con3 = document.getElementById("close1");

  if(con1.style.display == 'block'){
    con1.style.display = 'none';
  }
  else {
    con1.style.display = 'block';
  }

  if(con2.style.display == 'none'){
      con2.style.display = 'inline';
      con3.style.display = 'none';
  }
  else{
      con2.style.display = 'none';
      con3.style.display = 'inline';
  }
}
function showNhideDis2() {
  con1 = document.getElementById("dis2");
  con2 = document.getElementById("open2");
  con3 = document.getElementById("close2");

  if(con1.style.display == 'block'){
    con1.style.display = 'none';
  }
  else {
    con1.style.display = 'block';
  }

  if(con2.style.display == 'none'){
      con2.style.display = 'inline';
      con3.style.display = 'none';
  }
  else{
      con2.style.display = 'none';
      con3.style.display = 'inline';
  }
}
function showNhideDis3() {
  con1 = document.getElementById("dis3");
  con2 = document.getElementById("open3");
  con3 = document.getElementById("close3");

  if(con1.style.display == 'block'){
    con1.style.display = 'none';
  }
  else {
    con1.style.display = 'block';
  }

  if(con2.style.display == 'none'){
      con2.style.display = 'inline';
      con3.style.display = 'none';
  }
  else{
      con2.style.display = 'none';
      con3.style.display = 'inline';
  }
}
function showNhideDis4() {
  con1 = document.getElementById("dis4");
  con2 = document.getElementById("open4");
  con3 = document.getElementById("close4");

  if(con1.style.display == 'block'){
    con1.style.display = 'none';
  }
  else {
    con1.style.display = 'block';
  }

  if(con2.style.display == 'none'){
      con2.style.display = 'inline';
      con3.style.display = 'none';
  }
  else{
      con2.style.display = 'none';
      con3.style.display = 'inline';
  }
}
