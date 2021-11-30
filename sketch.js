var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img , back , backimg ;

var left , right ,obstacles , leftTurn ,rightTurn ,  rockImg ;

var  obstacleGroup;

var gameState=0;

function preload(){
  track = loadImage("../images/straight-road-clipart-7.jpg");
  car1_img = loadImage("../images/car1.png");
  backimg = loadImage("../images/image.png");
  ground = loadImage("../images/ground.png");
  leftTurn = loadImage("../images/left.png");
  rightTurn = loadImage("../images/right.png");
  rockImg = loadImage("../images/rock.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 10, displayHeight-150);

  track1=createSprite(620,500,10,10);
  track1.addImage("track1",track);
  track1.scale=1;

  car1=createSprite(650,500,10,10);
  car1.addImage("car1",car1_img);
  car1.scale=1.5;

  back=createSprite(630,300,20,20);
  back.addImage("back",backimg);
  back.scale=1.5

  left=createSprite(130,500,20,20);
  left.addImage("left",leftTurn);
  left.scale=0.1

  right=createSprite(430,500,20,20);
  right.addImage("left",rightTurn);
  right.scale=0.1

  spawnRocks();
}


function draw(){
background(0);

obstacles.visible=false;



for(var i = 0 ; i < touches.length ; i++){
  back.visible=false;
  gameState=1;
}


  if(car1.isTouching(obstacleGroup)){
    obstacleGroup.destroyEach();
    car1.destroy();
    //set velocity of ground 0
  }


if (gameState===1){
 
   
if(keyCode === 32){
  gameState=1;

  back.visible=false;
}


    spawnRocks();

    track1.velocityY=2;
    obstacles.visible=true;

    if (track1.y > 800){
      track1.y = track1.width/2;
    }
  }
  else if(gameState===2){
  obstacles.visible=false;
  back.visible=true;
}
  
    drawSprites();

   
}

if(keyCode === 39  ){
  // car1.velocityX=3;
  // car1.velocityY=0;
  car1.x=car1.x+1;

}

if(keyCode === 37){
  // car1.velocityX=-3;
  // car1.velocityY=0;
  car1.x=car1.x-1;
}

function spawnRocks(){
  if(frameCount%50===0){
    obstacles=createSprite(1000,0,10,10);
    obstacles.scale=0.060;
    obstacles.x=Math.round(random(10,3000));
    obstacles.addImage("obs",rockImg);
    obstacles.velocityY = 8;
    obstacles.lifetime=200;
    obstacleGroup = new Group();
    obstacleGroup.add(obstacles);

  }
  
}