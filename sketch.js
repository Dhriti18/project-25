
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
function preload()
{
	
}

function setup() {
	createCanvas(800,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

Dustbin1=new Dustbin(700,400,100,150);
Ground=new Ground(400,480,800,10);

paper2=new Paper(100,700,70,40);
console.log(paper2);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("aqua");
  paper2.display();
 Dustbin1.display();

  Ground.display();

  paper2.body.position.x=mouseX;

  paper2.body.position.y=mouseY;
  drawSprites();
 
}function keyPressed(){
if(keyCode===UP_ARROW){

  Matter.Body.applyForce(paper2.body, paper2.body.position, {x:170,y:-170});

}

}



