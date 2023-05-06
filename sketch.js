/*this sketch takes pictures from via the device's webcam everytime the user clicks. it edits the image and displays the result.

by clicking very fast, users can kind of simulate the sketch if it worked with live webcam footage (instead of just image) */

var capture;
var img;

var numColumns = 100;
var numRows = 50;

var myFont;


/*function preload(){
  myFont = loadFont('assets/MonumentGrotesk.otf', drawText);
}*/

function setup(){  
  createCanvas(640,480);
  
  capture = createCapture(VIDEO);
  capture.hide();
  
  capture.elt.addEventListener('playing', mousePressed);
  
  noLoop();
  
  print("isa eugenio, ICOM-120, FINAL PROJECT, may 5 2023");
  
  fill(255);
  textSize(40);
  text('click !', 280, 300);
  textAlign(CENTER);
}

/*function drawText(myFont) {   
  fill(255);
  textSize(20);
  text('click!', 220, 300);
  textAlign(CENTER);
}*/


function draw(){
 

if (img) {
    image(img, 0, 0);
  }
}

function mousePressed() {
  // capture frame from webcam upon mouse click
  if (!img || img.width !== capture.width) {
    img = createImage(capture.width, capture.height);
  }
  
  img.copy(capture, 0, 0, capture.width, capture.height, 0, 0, img.width, img.height);
  
  redraw();
  
  let columnWidth = width/numColumns;
  let rowHeight = height/numRows;
  
  background(0);

  //image effect
  for (let i = 0; i < numColumns; i++){
    for (let j=0; j<numRows; j++){
      
      let x = i*columnWidth;
      let y = j*rowHeight;
      let w = columnWidth;
      let h = rowHeight;
      
      let colorAtPosition = img.get(x,y);
      let brightnessAtPosition = brightness(colorAtPosition);
 
      strokeWeight(floor(brightnessAtPosition)/80);
      stroke(255);
      fill(0);
      ellipse (x,y,w);
    }    
  }
}