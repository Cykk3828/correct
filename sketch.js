var bullet,wall,speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  bullet.shapeColor=color(255, 253, 255);
  bullet=createSprite(50, 200, 50, 5);
 
  wall=createSprite(1300, 200, 60, 400/2);
  wall.shapeColor=color(80,80,80);

bullet.velocityX=speed;
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255);  



if(wall.x-car.x<(bullet.width+wall.width)/2)
{
  bullet.velocity=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180)
  {
    bullet.shapeColor=color(255,0,0);
  
  }
  if(deformation<180 && deformation>100)
  {
    bullet.shapeColor=color(230,230,0);
  }
  if(deformation<100)
  {
    bullet.shapeColor=color(0,255,0);
  }
}
  drawSprites();
}