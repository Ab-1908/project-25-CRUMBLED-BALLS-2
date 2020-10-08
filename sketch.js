
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var bin , dustbinImage, dustbin;

function preload()
{
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,670,width,20);

	dustbin = createSprite(600,510,200,227);
	dustbin.addImage(dustbinImage);
	dustbin.scale=0.8

	bin = new dustBin(600,650,200,20);
	bin2 = new dustBin(710,520,20,250);
	bin3 = new dustBin(490,520,20,250);

	
	paper = new Paper(100,625,70);
}


function draw() {
  background(255,255,255);
  Engine.update(engine);

  ground.display();

  bin.display();
  bin2.display();
  bin3.display();
  paper.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

      Matter.Body.applyForce(paper.body,paper.body.position,{x:250,y:-250});

	}
}



