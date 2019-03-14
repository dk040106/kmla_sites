window.onload=function(){
  var con1 = document.getElementById("day");
  con1.style.display = 'none';
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
  }else{
      con2.style.display = 'none';
      con1.style.display = 'block';
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
  }
}
