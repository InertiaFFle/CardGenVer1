function generateId() {

  const nameVal = document.getElementById("name").value;
  const squadVal = document.getElementById("squad").value;
  const timeVal = document.getElementById("timezone").value;
  const dateVal = document.getElementById("signed").value;
  const colorVal = "#" + document.getElementById("idcolor").value;
  const idVal = Date.now();

  const colorCaps = colorVal.toUpperCase();


  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  var img1 = document.getElementById("bimg");
  var wtm = document.getElementById("wtm");

  
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.fillStyle = colorVal;
  ctx.fillRect(0,0,c.width,c.height);
  ctx.drawImage(img1, 0, 0,600,300);
  ctx.fillStyle = "black";
  ctx.font = "22px Arial";
  ctx.fillText(nameVal,92,160);
  ctx.fillText(nameVal,92,160);
  ctx.fillText(squadVal,127,190);
  ctx.fillText(squadVal,127,190);
  ctx.fillText("UTC"+timeVal,135,220);
  ctx.fillText("UTC"+timeVal,135,220);
  ctx.fillText(dateVal,100,250);
  ctx.fillText(dateVal,100,250);
  ctx.fillText("SKS-"+idVal,139,280);
  ctx.fillText("SKS-"+idVal,139,280);
  ctx.rotate(90 * Math.PI / 180);
  ctx.font = "22px Monospace";
  ctx.fillText(colorCaps,1, -575);
  ctx.rotate(-180 * Math.PI / 180);
  ctx.fillText(colorCaps,-300,591);
  ctx.rotate(90* Math.PI / 180);
  ctx.drawImage(wtm, 0, 0, 600, 300);

  console.log("generate trigger");

}

function clearId() {

  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  var img1 = document.getElementById("bimg");
  var wtm = document.getElementById("wtm");

document.getElementById("name").value = "";
document.getElementById("squad").value = "";
document.getElementById("idcolor").value = "ffffff";

  ctx.clearRect(0, 0, c.width, c.height);
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,c.width,c.height);
  ctx.drawImage(img1, 0, 0, 600, 300);

  console.log("clear trigger");

}

function drawTemplate() {

  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  var img1 = document.getElementById("bimg");
  var wtm = document.getElementById("wtm");

  document.getElementById("idcolor").innerHTML = "white"
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,c.width,c.height);
  ctx.drawImage(img1, 0, 0, 600, 300);

  console.log("draw trigger");

}

function downloadImage() {
  const name = document.getElementById("name").value;
  const unix = Date.now();
  const canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  var link = document.createElement('a');
  link.download = unix + "-" + name + "-SQZ.png";
  link.href = image;
  link.click();
  
  console.log("download trigger");
   
}
