var box; 
function setup() {
  createCanvas(800,800);
  box = createSprite(400,400,100,100);
  box.shapeColor="green";

}

function draw() 
{
  background(33);
  if(keyIsDown(RIGHT_ARROW)){
  box.position.x = box.position.x + 10 ;
  }
  if(keyIsDown(LEFT_ARROW)){
 box.position.x = box.position.x - 10;
  }
  if(keyIsDown(UP_ARROW)){
box.position.y = box.position.y - 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y + 10;
  }
  drawSprites();
}




