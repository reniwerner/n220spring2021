let xPos = 0;
let yPos = 40;


let xSpeed = 5;
let ySpeed = 0;


function setup(){
    createCanvas(800, 600);
}

function draw() {
    background(121, 210, 217)
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    fill(195, 116, 219);

    circle(xPos, 300 , 30);
    xPos = xPos + 1;
    if(xPos > width) {
        xPos = 0;
    }

}

    
  