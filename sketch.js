var sea,ship,bird,reef;
var seaImg,shipImg,birdImg,reefImg;

function preload(){
   
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");

  reefImg = loadImage("reef.png");
  
  seaImg = loadImage("sea.png");

  birdImg = loadImage("bird-1.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  reef = createSprite(370, 370);
  reef.addImage(reefImg);
  reef.velocityX = -4;
  reef.scale = 0.4;  
  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;

  bird = createSprite(300, 100);
  bird.addImage(birdImg);
  bird.scale=0.3;
  
}

function draw() {
  background(0);
  sea.velocityX = -3;
  reef.velocityX = -2

  if(sea.x < 0){
    sea.x = sea.width/8;
  }

  if(reef.x < -80){
    reef.x = 480;
  }

  drawSprites();
}