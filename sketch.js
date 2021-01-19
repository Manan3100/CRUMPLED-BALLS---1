
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var Dustbin1
var dustbin2
var dustbin3

var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2	
	}
	
	ground = new Ground(600, height, 1200, 85);
	dustbin1 = new Dustbin(550, 620, 20, 100)
	dustbin2 = new Dustbin(610, 660, 100, 20)
	dustbin3 = new Dustbin(670, 620, 20, 100)
 
	paper = new Paper(100, 600, 10)
	//Create the Bodies Here.


	
}


function draw() {
  background(0);
  Engine.update(engine);
  
  
  ground.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();

 paper.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:15, y:-15})
	}
}

