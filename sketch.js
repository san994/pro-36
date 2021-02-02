var dog,sadDog,happyDog;

var food;
var feed,addfood;
var foodObj;
var database

function preload(){

  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");

}

function setup() {
 
  database = firebase.database();
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  var feed = createButton("feed the dog")
  feed.position(600,100);
  feed.mousePressed();
  
  var addfood = createButton("add the food")
   addfood.position(700,100);
   addfood.mousePressed()

  var name = createInput("name")
      name.position(900,100)

  

  var enter = createButton("enter")
      enter.position(900,150);
      enter.mousePressed();
  
      var nm = enter.value();

      dog.update(nm);

 food = new Food();
  

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog(){




}

//function to add food in stock



function update(name){

var dgname = 'dog/name'
database.ref(dgname).set({

 name:name

})


}


 
