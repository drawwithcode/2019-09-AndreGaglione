var alpha = 0; // Orientation around Z axis
var beta = 0; // Orientation around X axis
var gamma = 0; // Orientation around Y axis

function setup() {
	createCanvas(windowWidth, windowHeight);
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', onOrientationChange);
  }
  background(255,255,255);
  angleMode(DEGREES);
  rectMode(CENTER);
  img = loadImage('freccia.jpg'); // Load the image
}

function draw() {


  textSize(20);
  textAlign(CENTER, CENTER);
  text('okey, this tool should work like a compass', width/2, height/4);
  text('but actually I got lost (on the web) trying to find where the North is', width/2, height/3.5);
  push();
  	translate(width/2, height/2);
    rotate(alpha);
    console.log(alpha);
	image(img, 0, 0, img.width / 3, img.height / 3);
  pop();

}

function onOrientationChange(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;

  println(alpha + " " + beta + " " + gamma);
}
