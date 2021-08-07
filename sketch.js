var box1
function setup() {
  createCanvas(400,400);
  box1=createSprite(200,200,10,10);
}

function draw() 
{
  background("pink");
  if(keyDown("left")){
    box1.x=box1.x-5;
  }
  if(keyDown("right")){
    box1.x=box1.x+5;
  }
  if(keyDown("up")){
    box1.y=box1.y-5;
  } 
   if(keyDown("down")){
    box1.y=box1.y+5;
  }
  drawSprites();
}
 



