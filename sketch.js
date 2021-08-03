const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;

const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth / 2, windowHeight / 0.5);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options={
		mouse: canvasmouse
	};
	mConstraint = MouseConstraint.create(engine,options);
	World.add(world,mConstraint);

	pendulum1 = new Pendulum (340,450,"black");
	sling1 = new Sling (pendulum1.body, {x:340,y:225});

	pendulum2 = new Pendulum (385,450,"black");
	sling2 = new Sling (pendulum2.body, {x:385,y:225});
	

	pendulum3 = new Pendulum (430,450,"black");
	sling3 = new Sling (pendulum3.body, {x:430,y:225});

	pendulum4 = new Pendulum (475,450,"black");
	sling4 = new Sling (pendulum4.body,{x:475,y:225});

	pendulum5 = new Pendulum (520,450,"black");
	sling5 = new Sling (pendulum5.body,{x:520,y:225});
}


function draw() {
  rectMode(CENTER);
  background("cyan");

  pendulum1.display();
  sling1.display();

  pendulum2.display();
  sling2.display();

  pendulum3.display();
  sling3.display();

  pendulum4.display();
  sling4.display();

  pendulum5.display();
  sling5.display();
}

function mouseDragged(){
	Matter.Body.setPosition(pendulum1.body, {x:mouseX, y:mouseY});
}

