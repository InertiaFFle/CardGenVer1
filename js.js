/**
 * Function to populate values in card from form input
 */
function generateCard() {
    // Get value of Student name from form input 
    const nameElement = document.getElementById("name");
    const nameValue = nameElement.value; 
    // Assign the value of student name to generated card
    const cardNameElement = document.getElementById("cardName");
    cardNameElement.innerHTML = nameValue;

    // Get value of college name from form input 
    const collegeNameValue = document.getElementById("collegeName").value;
    // Assign the value of college name to generated card
    document.getElementById("cardCollegeName").innerHTML = collegeNameValue;

    // Get value of location name from form input 
    const locationValue = document.getElementById("location").value;
    // Assign the value of location name to generated card
    document.getElementById("cardLocation").innerHTML = locationValue;

  const colorId = document.getElementById("colorid").value;
    // Display final generated card to user     
    

var id = Date.now()
  var c = document.getElementById("canvas1");
  var img = document.getElementById("shit");
  var utc = document.getElementById("timezone").value;
var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, canvas1.width, canvas1.height);
ctx.font = "30px Arial";
ctx.fillStyle = colorId;
ctx.fillRect(0,0, canvas1.width, canvas1.height);
ctx.drawImage(img, 0, -1);
ctx.fillStyle = "black";
ctx.fillText(nameValue,120,211);
ctx.fillText(collegeNameValue,165,251);
ctx.fillText(locationValue,203, 320);
ctx.fillText("UTC"+utc,190,291);
  ctx.fillText(id ,190, 360);
  console.log("printed");
  
                        
}

function clearcanvas()
{ 
  var img = document.getElementById("shit");
  console.log("cleared");
  var cc = document.getElementById("canvas1");
  var ctxx = cc.getContext("2d");
  ctxx.clearRect(0, 0, canvas1.width, canvas1.height);
  ctxx.fillStyle = "skyblue";
  ctxx.fillRect(0,0, canvas1.width, canvas1.height);
  ctxx.drawImage(img, 0, -1);
}

function download_image(){
  const canvas = document.getElementById("canvas1");
  var ctx = canvas.getContext("2d");
  var wtm = document.getElementById("watermark");
  ctx.drawImage(wtm,0,-1);
  var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  var link = document.createElement('a');
  link.download = "my-image.png";
  link.href = image;
  link.click();
  
  console.log("download");
   
}

