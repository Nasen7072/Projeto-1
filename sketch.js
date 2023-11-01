function setup() {
    createCanvas(400, 400);
    background("black");
    
  }
  
  function draw() {
    
    stroke("purple");
    fill("lightblue");
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20,20);
    }
  }