function setup() {
    createCanvas(800,600);
    for (let i = 0; i < 500; i++){
        //creating a loop of 500
        fill(random(255), random(255), random(255), random(175));
        //selecting random colors
        square(random(800), random(600), random(100), 20);
        noStroke();
        //setting random locations for the squares
    }
}