var ghost, ghostCollided, ghost2;
var background1, background2;
var invisibleGround;
var coffin, coffinImage;
var END=0
var PLAY=1
var gameState = "PLAY"


function preload(){
    ghost2 = loadImage("ghost.png");
    ghostCollided = loadImage("collided_ghost.png");
    background1 = loadImage("BG.jpg");
    coffin = loadImage("coffin.png");
}


function setup(){
    createCanvas(windowWidth,windowHeight);
    background2 = createSprite(windowWidth/2,windowHeight/2,400,400);
    background2.addAnimation("background1",background1);
    background2.scale=1

ghost = createSprite(windowWidth/2-500, windowHeight-100, 200,200);
ghost.addAnimation("ghost2",ghost2);
ghost.scale=0.3
 
invisibleGround = createSprite(windowWidth/2-700, windowHeight-100, windowWidth,5);

coffin=new Group();
}


function draw(){

    spawnCoffin()
    ghost.collide(invisibleGround);

    invisibleGround.visible=false;

            

if(gameState==="PLAY"){

    background2.velocityX=-5;
    console.log(background2.x);

    if (background2.x < 0){
        background2.x = background2.width/2;
      }

      if(keyDown("space")){
          ghost.velocityY=-10
          
      }
      ghost.velocityY = ghost.velocityY + 0.8

     if(ghost.isTouching(coffin)){
     gameState="END";
     } 
     
}

if(gameState==="END"){
    
        
}


background2.depth = ghost.depth;
ghost.depth = background2.depth + 1;

background2.depth = invisibleGround.depth;
invisibleGround.depth = background2.depth + 1;


background2.depth = coffin.depth;
coffin.depth = background2.depth + 1;

drawSprites();
}




function spawnCoffin() {

    if (frameCount % 60 === 0) {
      coffinImage = createSprite(windowWidth/2-700, windowHeight-100, 200,200);
      coffinImage.x = Math.round(random(windowWidth/2, windowHeight/3));
      coffinImage.addImage(coffin);
      coffinImage.scale = 0.1;
      coffinImage.velocityX = -3;

coffin.add(coffinImage)

    }
}