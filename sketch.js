var bgImg, Bg;
var playerImg, player;
var edges;
var vehicle, amb1Img;
var amb2Img, citybusImg, coinImg, redcarImg,sclbusImg;
var vehicleGroup;
var bluecarImg, bluecar;

function preload(){
  
bgImg = loadImage("bg2.png");
playerImg = loadImage("player.png");  
amb1Img = loadImage("ambulance 1.png");  
amb2Img = loadImage("ambulance 2.png");
citybusImg = loadImage("citybus.png");
coinImg = loadImage("coin.png");
redcarImg = loadImage("red car.png");
sclbusImg = loadImage("scl bus.png");
bluecarImg = loadImage("bluecar.png");
}

function setup(){
createCanvas(1000,800);
  
Bg = createSprite(500,400,800,800);
Bg.addAnimation("moving", bgImg);
Bg.scale = 1.5;
//Bg.velocityY = 2;


player = createSprite(515,630,20,20);
player.addImage(playerImg);
player.scale = 0.4;

edges = createEdgeSprites();

vehicleGroup = new Group();









}

function draw(){
  

//if(Bg.y < 400){
   //Bg.y = Bg.height/2;
//}







if(keyDown("RIGHT_ARROW")){
   player.x = player.x+5;

}

if(keyDown("LEFT_ARROW")){
   player.x = player.x-5;

}

player.bounceOff(edges);



  
  Coin();
  spawnVehicles();
  drawSprites();
}

function spawnVehicles(){
if(frameCount % 100 === 0){
   vehicle = createSprite(515,450,40,40);
   vehicle.velocityY = 2;
   vehicle.x = Math.round(random(300,700));
   var rand = Math.round(random(1,6));
   switch(rand){
      case 1: vehicle.addImage(amb1Img);
      break;
      case 2: vehicle.addImage(amb2Img);
      break;
      case 3: vehicle.addImage(citybusImg);
      break;
      case 4: vehicle.addImage(sclbusImg);
      break;
      case 5: vehicle.addImage(redcarImg);
      break;
      case 6: vehicle.addImage(bluecarImg);
      break;
default:break
   }
   vehicle.scale = 0.5
   vehicleGroup.add(vehicle);
}

}

function Coin(){
if(frameCount % 200 === 0){
 coin = createSprite(515,450,40,40);
 coin.velocityY = 2;
 coin.x = Math.round(random(300,700));
 coin.addImage(coinImg);
 coin.scale = 0.1
}
}


/*mam, i have added new background and new car 
is it ok?*/