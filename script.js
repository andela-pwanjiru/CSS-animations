function initiate() {
  var elem = document.getElementById('canvas');
  var canvas = elem.getContext('2d');

  //Gradient on rectangle
  var gradient = canvas.createLinearGradient(0, 0, 10, 100)
  gradient.addColorStop(0.5, "#0088ff")
  gradient.addColorStop(1, "#ff0000")
  canvas.fillStyle = gradient;

  canvas.fillRect(150, 10, 200, 100);


  // rectangle with stroke, fill and clearx
  canvas.fillStyle = "#0000ff";
  canvas.strokeStyle = "#ff0000";


  canvas.strokeRect(100, 100, 120, 120);
  canvas.fillRect(110, 110, 100, 100);
  canvas.clearRect(130, 130, 30, 30);


}

addEventListener("load", initiate);
