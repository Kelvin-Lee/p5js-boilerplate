function setup(){
  createCanvas(500,500);
  background(0,0,127);
}

function draw(){
  stroke(127,0,0);
  fill(0,127,0);  
  rect(200,200,100,100);
  rect(mouseX,mouseY,10,10);
}
