let xPos= 100;
let yPos = 0;
let xSpeed = 5;
let ySpeed = 1;

function setup() {
  createCanvas(800, 600);
}

function draw() {

  background(108, 214, 101 );

fill(242, 133, 211);
noStroke();
  circle(xPos, yPos, 20);

  
  xPos = xPos + xSpeed;
  yPos = yPos + ySpeed;

  
  if(xPos < 0 || xPos > width) {
    xSpeed = xSpeed * -1;
  }

  
  if(yPos < 0 || yPos > height) {
    ySpeed = ySpeed * -1;
  }
}