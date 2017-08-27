function doRectClick(){
  var myrect = document.getElementById('hexa');
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  myrect.style.fill = 'rgb(' + r + ', ' + g + ' , ' + b + ')'; 
}

function jsClick(clickedId){
  var myrect = document.getElementById(clickedId);
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  myrect.style.fill = 'rgb(' + r + ', ' + g + ' , ' + b + ')'; 
}