var cowboy , cowboyImg ;
var cowgirl , cowgirlImg;
var titlepic;
var gameState = 0;
var mainpagepic ;
var table ;
var target1 , target1Img ;
var target2 , target2Img ;
var target3 , target3Img ;
var target4 , target4Img ;
var target5 , target5Img ;
var target6 , target6Img ;
var mainscreen;

function preload(){
titlepic = loadImage("images/title_pic.png");
cowboyImg = loadImage("images/cowboy.png");
cowgirlImg = loadImage("images/cowgirl.png");
mainpagepic = loadImage("images/mainpic.png");
table = loadImage("images/table.webp");
target1Img = loadImage("images/target_1.jpg");
target2Img = loadImage("images/target_2.png");
target3Img = loadImage("images/target_3.jpg");
target4Img = loadImage("images/target_4.png");
target5Img = loadImage("images/target_5.png");
target6Img = loadImage("images/target_6.png");
}


function setup() {
  createCanvas(1000,700);
  

}

function draw() {
  background('yellow');  
  drawSprites();
  text(mouseX + "," + mouseY , 100,100);

  if(gameState === 0 ){
    
    character();
    
    image(titlepic , 280 , -20);
    textSize(50);
    fill('black');
    text("Old Town Road" , 350 , 220);

  if(mousePressedOver(cowboy)||mousePressedOver(cowgirl)){
    gameState = 1
  }
    }
    // 
    else if(gameState === 1){      
      target();
      image(table , 280 , 200);
      
    }
}

function character(){
  cowboy = createSprite(300,390,100,200);
  cowboy.addImage(cowboyImg);
  cowgirl = createSprite(700,390,100,200);
  cowgirl.addImage(cowgirlImg);
}

function target(){
  mainscreen = createSprite(500 , 350);
  mainscreen.addImage(mainpagepic);
  mainscreen.scale = 1.2

target1 = createSprite(10 , 10 , 20 , 20);
target1.addImage(target1Img);
target2 = createSprite(10 , 10 , 40 , 40);
target2.addImage(target2Img);
target3 = createSprite(10 , 10 , 60 , 60);
target3.addImage(target3Img);
target4 = createSprite(10 , 10 , 80 , 80);
target4.addImage(target4Img);
target5 = createSprite(10 , 10 , 100 , 100);
target5.addImage(target5Img);
target6 = createSprite(10 , 10 , 120 , 120);
target6.addImage(target6Img);
}