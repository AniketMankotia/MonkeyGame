
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  //creating ground
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background(255);
 
  
    
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  stroke("balck");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);

  
  
  if(ground.x<0){
  ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  food();
  spawnobstacle();
  
  drawSprites();
}

function food() {
  if(World.frameCount%80===0){
    banana = createSprite(400,200,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.07;
    banana.y=Math.round(random(120,200));
    banana.velocityX=-8;
    banana.setLifetime=50;
    
    foodGroup.add(banana);
  }
}

function spawnobstacle() {
  if(World.frameCount%300===0){
    obstacle = createSprite(400,321,20,20);
    var rand = Math.round(random(120,200));    
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.14;
    obstacle.velocityX = -6;
    obstacle.setLiftime=50;
    
    obstacleGroup.add(obstacle);
  }
}





