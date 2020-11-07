
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)

	paperObject = new Paper(50,200,45,45)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyCode === UP_ARROW){
  Matter.Body.appyForce(paperObject.body,paperObject.body.position,{x:85, y:-85});
  }
 
  ground.display();
  paperObject.display();

  drawSprites();
}

	


