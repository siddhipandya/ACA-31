
var bg, backgroundImg; ironman; ground;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironmanImg= loadImage("images/iron.png");
 
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=-2
  ironman= createSprite(200,505,20,50);
  ironman.addImage(ironmanImg);
  ironman.scale=0.3
  ground= createSprite(200,585,400,10);
  ground.visible = false;
  
 

function draw() {
  if (keyDown("up")){
    ironman.velocity=-10;
  }
  if (keyDown ("left")){
    ironman.velocity=-5;
  }
  if (keyDown("right")){
    ironman.velocity=+5;
  }
}
  ironman.velocity=ironman.velocity= +0.5;
  ironman.collide(ground) ;

  
 
    
    drawSprites();
   
}

