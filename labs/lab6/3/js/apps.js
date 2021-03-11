

var myMoon = {
    x: 100,
    y:100,
    size:80,
}
function setup() {
    createCanvas(800, 600);
    background("black");
}

function draw() {
 fill(242, 242, 230);
 myMoon.x+=1;
 myMoon.y+=1;
    circle(myMoon.x, myMoon.y, 80);
}