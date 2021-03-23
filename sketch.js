
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ball,top;
var engine,world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ball1 = new Ball(500,700,50);
	
	top1 = new Top(350,200,500,20);
	constlog1= new Constlog(ball1.body,top1.body);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  
  ball1.display();
  
  top1.display();
  constlog1.display();
  
  drawSprites();
 
}



