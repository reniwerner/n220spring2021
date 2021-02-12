let no_of_rows = 3;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(250);
    stroke(255, 255, 255);
    strokeWeight(2);
    fill(255, 0, 0);
  
    // for each row
    for (let row = 0; row <= no_of_rows; row++) {
      
        // for each column in the row
        for (let column = 0; column <= row ; column ++) {
           square(column * 50, row * 50, 50);
        }
    }
}
    
    
   


    

    