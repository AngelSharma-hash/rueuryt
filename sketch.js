var bullet   , wall;
var speed;
speed= Math.random(223,321);
var weight;
weight = Math.random(30,52);
var thickness;
thickness = Math.random(22,83);


function setup() {
  createCanvas(1600,800);
  bullet = createSprite(50, 200, 60, 20);
  bullet.velocityX=speed;
  bullet.debug=true;
   wall = createSprite(1200,200,thickness,height/2);
   wall.shapeColor=color(80,80,80);
   
}

function draw() {
  background(255,255,255);  
 

  if(hascollided(bullet,wall)){

    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

   

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }

  }

 

  drawSprites();
}

function hascollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width/2;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    bullet.velocityX=0;
    return true;
  }
  return false;
}