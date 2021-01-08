//Create variables here
var dog 
var happyDog
var database
var foodS
var foodStock
function preload(){
  //load images here
  
dog1=loadImage("images/dogImg.png");
  dogHappy=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
  dog=createSprite(250,300,150,150)
  dog.addImage(dog1)
  dog.scale=0.2
}


function draw() {  
background(46,139,87)
if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy)
}
  drawSprites();
  //add styles here
textSize(20)
fill("yellow")
text("food remaning"+foodS,170,200)
text("press up arrow to feed the dog",130,10,300,20)
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0

  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}



