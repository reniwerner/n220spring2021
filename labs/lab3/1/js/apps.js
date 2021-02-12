function setup() {
    createCanvas(1250, 600);
}

function draw() {
    background(237, 231, 138);
    var y = 100;
    // 25 black squares info
    for (let i = 0; i < 25; ++ i) {
        let x = i*50;
        
        if (i % 3 == 0 && i % 5 == 0) {
            // the last blue square info
            fill (100, 113, 217);
            square(x, y, 50);
        }
        else if (i % 5 === 0) {
            // the green square info
            fill(125, 209, 128);
            square(x, y, 50);
        }
        else if (i % 3 === 0) {
            // the purple circle info
            fill(178, 125, 209);
            ellipse(x+25, y+25, 50, 50);
        }
        else {
            // the black circle info
            fill(0);
            ellipse(x+25, y+25, 50, 50);
        }
    }
}