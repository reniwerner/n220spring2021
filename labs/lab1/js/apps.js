function setup() {
  var brown ="#a87532";
  var black ="#453e38";
  var pink ="#de85bf";
    createCanvas(400, 400);
    fill(brown);
    circle(100, 100, 35);
    fill(black);
    circle(90, 90, 5);
    circle(110, 90, 5);
    triangle(95, 100, 100, 95, 105, 100);
    triangle(85, 60, 82, 75, 94, 75);
    triangle(110, 60, 105, 75, 116, 75);
    line(90, 115, 98, 108);
    line(90, 110, 98, 108);
    line(107, 108, 115, 113);
    line(107, 108, 115, 109);
    fill(pink);
    ellipse(102, 113, 8, 10 );
    fill(brown);
    ellipse(107, 185, 100, 115);
    bezier(148, 220, 180, 170, 170, 160, 190, 170);

  
  }