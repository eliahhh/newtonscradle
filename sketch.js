
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, rope1, rope2, rope3, rope4, roof1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	A = 40;
	//Create the Bodies Here.
    roof1 = new Roof(300,100,200,20);
	rope1 = new Rope(bob1.body,roof1.body, -A*2,0);
	rope2 = new Rope(bob2.body,roof1.body, -A*1,0);
	rope3 = new Rope(bob3.body,roof1.body, A*2,0);
	rope4 = new Rope(bob4.body,roof1.body, A*1,0);
	bob1 = new Bob(200,200,30);
	bob2 = new Bob(250,200,30);
	bob3 = new Bob(300,200,30);
	bob4 = new Bob(350,200,30);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  drawSprites();
 
}



