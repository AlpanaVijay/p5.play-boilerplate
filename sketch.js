var movingRect, fixedRect;
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite(200,100,50,80)

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green"
}

function draw() {
  background("black");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log("for difference " +movingRect.x - fixedRect.x);
  console.log("addtiion of width "+movingRect.width/2 + fixedRect.width/2);

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red"
  }

  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green"
  }
  drawSprites();
}
