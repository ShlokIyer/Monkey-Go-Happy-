
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(50, 310, 10, 10);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;

  score = 0

   obstacleGroup = new Group();
   FoodGroup = new Group();
  
}


function draw() {
  background('#fae');
  
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX = 0;
    banana.VelocityX  = 0;
    monkey.VelocityY=0;
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(1);
   FoodGroup.setLifetimeEach(1);
  }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50); 
  
  stroke("black");
  textSize(20);
  fill("black");
survivaltime=Math.ceil(frameCount/frameRate());
  text("survival Time:",+survivaltime,50,100);

 if (ground.x < 0){
      ground.x = ground.width/2;
    } 
  console.log(frameCount)
  
   if(keyDown("space")&& monkey.y >= 175 ) {
        monkey.velocityY = -12;
   }
  monkey.velocityY = monkey.velocityY + 0.8 
  
  monkey.collide(ground);
  
  spawnObstacles();
  spawnfood();
  
  drawSprites();
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   
   obstacle = createSprite(800,320,10,40);
   obstacle.velocityX = -5
   obstacle.addImage(obstaceImage)
   obstacle.scale=0.08
   obstacle.lifetine=300
   obstacleGroup.add(obstacle);
   
 } 
}

function spawnfood() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    banana = createSprite(600,250,40,10);
    banana.y = random(150,180);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    monkey.depth = banana.depth + 1;
    banana.lifetime = 190;
    FoodGroup.add(banana);

  } 
}



