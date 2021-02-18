var rectXY = [];
function setup() {
  createCanvas(800, 600);
}
function draw() {
  background(222, 152, 235);
  rectMode(CENTER);
  fill(255);
  for (var i = 0; i < rectXY.length; i++) {
    fill(rectXY[i][1]);
    rect(rectXY[i][0], rectXY[i][1], 50, 25);
    rectXY[i][1] += 1;
  }
}
function mousePressed() {
  rectXY.push([mouseX, mouseY, random(255)]);
}