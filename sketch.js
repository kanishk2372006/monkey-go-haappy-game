
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var gamestate=PLAY;
var PLAY=1;
var END=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  banana = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  ground=createSprite(0,300,800,7);

monkey=createSprite(20,270,20,20)
  monkey.addAnimation("run",monkey_running)
  monkey.scale=0.1;
  obstacles1=createGroup();
 banana1=createGroup();
}


function draw() {
background("white")
  text("score=0",10,10)
  
      
    obstacle1.velocityXEach=-(3+5*score/10);
    
    if(keyDown("space")&& monkey.y >= 200) {
        monkey.velocityY = -8;
         }
    monkey.velocityY = monkey.velocityY + 0.8
    monkey.collide(ground);
    if(obstacles1.isTouching(monkey)){
     obstacles1.setVelocityXEach=0;
      
      
      
    }
    if(banana1.isTouching(monkey)){
     score=score+1
      banana1.destroyEach();
      
      
    }
   obstacle1();
  
    
    
    
    
  
  
 
  drawSprites();
  
}

function obstacle1(){
 if(frameCount%60===0){ obstacles=createSprite(400,280,20,20);
 obstacles.addImage( obstaceImage);
 obstacles.scale=0.1;
  obstacles.velocityX=-7;
                       
    obstacles.lifetime=80;          
    obstacles1.add(obstacles)
                       
}
  if(frameCount%120===0){ fruit=createSprite(400,220,20,20);
 fruit.addImage(   banana);
 fruit.scale=0.1;
  fruit.velocityX=-10;
  
  fruit.lifetime=80;    
  banana1.add(fruit);
}
 
  
  
}




