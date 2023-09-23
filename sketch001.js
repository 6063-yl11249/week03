//week 03 code  

let xpos = 180

function setup() {
    createCanvas(600,600);
}

function draw() {
    background("pink");
    noStroke()

    rect(xpos, 10, 30, 30);

    rect(mouseX, mouseY, 30, 30);
    
    if (mouseX > width / 2) {
        if (mouseY > height / 2) {
            fill(255, 221, 51);
        } else {
            fill(128,193,109)
        }
        
    } else {

    if (mouseY > height / 2) {
        fill(118, 223, 255);
    } else {
        fill("white")
    }
    }
}
