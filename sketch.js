var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500);
  thickness=random(22,83)
 bullet= createSprite(50, 200, 50, 50);
 bullet.velocityX= speed;
  bullet . shapeColor = color(255);
 wall = createSprite(1500,200,thickness,300);
 wall.shapeColor=color("white");

}

function draw() {
  background(0);  
  if(wall.x-bullet.x < (wall.width+bullet.width)/2){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>200){
      wall.shapeColor=color(255,0,0);
    }
    
    if(deformation<150){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}