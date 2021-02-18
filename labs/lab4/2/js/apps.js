var radius = 20;
var x = [0,0,0,0,0,0,0,0,0,0,0];
var y = [0,0,0,0,0,0,0,0,0,0,0];
function setup() {
createCanvas(800, 600);
}

function draw() {
x.shift();
x.push(mouseX);
y.shift();
y.push(mouseY);
background(245, 212, 135);
for(let i=0;i<10;i++){
    fill(73, 150, 69);
ellipse( x[i], y[i], radius, radius );
}
}