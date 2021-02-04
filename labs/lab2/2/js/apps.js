function setup(){
    createCanvas(400, 300);
    fill(0, 102);
    noStroke();
}
function draw() {
background(1000);

if( mouseX > 200 ){
fill(230, 39, 68);
}
if( mouseX < 200 ) {
    fill(39, 150, 230);
}
circle(mouseX, mouseY, 20, 20);

}