function setup() {
    createCanvas(800, 600);
}
function draw() {
    background(200);


    for( var i = 0; 1 < 15; i++) {
        stroke(255 - (i*15));

        circle(200, 150, i * 10);
    }
}