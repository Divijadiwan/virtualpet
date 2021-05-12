//Create variables here
var dog,dogI,happyDog,database,foodS,foodStock;
function preload()
{
	//load images here
}

function setup() {
  database = firebase.database;
	createCanvas(800, 700);
  dogI = loadImage("Dog.png");
  dogHappy = loadImage("happydog.png");
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW))
{
  writeStock(foodS);
  dog.addImage(dogHappy);
}

  drawSprites();
  //add styles here
  textSize(33);
  fill('white');
  text("NOTE: Press UP_ARROW Key to feed Drago milk.",400,350);
}
function readStock(data)
{
foodS = data.val();
}
function writeStock()
{
  database.ref('/').update({
    Food: x
  })
}
 



