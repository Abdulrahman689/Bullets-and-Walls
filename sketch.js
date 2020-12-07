var bullet,wall, thickness;
var speed, weight;
function setup() {
  rectMode(CENTER)
  createCanvas(1600,400);
 
  speed=random(232,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet=createSprite(50,200,25,5);
  bullet.velocityX =speed; 
  wall=createSprite(1200,200,thickness,height/2);
  
}

function draw() {
  background(255,255,255);  
  
if(hasCollided(bullet, wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }
}
hasCollided(bullet, wall);
drawSprites();

}
function hasCollided(LB,LW)
{
  bulletRightEdge=LB.x+LB.width;
  wallLeftEdge=LW.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}