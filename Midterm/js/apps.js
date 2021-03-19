var radius= 20;
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
background(150);
for(let i=0;i<10;i++){

    if( mouseY > 200 ){
        fill(random(100));
    }
        if( mouseY < 200 ) {
            fill(random(255));
        
        }
        if(mouseY >= 300) {
            var radius = 100;
        }
        if(mouseY <= 250) {
            var radius = 60;
        }
        if(mouseY <= 200) {
            var radius = 40;
        }
        if(mouseY <= 150) {
            var radius = 35;
        }
        if(mouseY <= 100) {
            var radius = 20; 
        }

ellipse( x[i], y[i], radius, radius );



    
    
}
}