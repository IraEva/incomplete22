const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		restitution:0.5
	}
	bob1 = Bodies.circle(180,55,10,ball_options);
  World.add(world,ball);

  bob2 = Bodies.circle(220,40,15,ball_options);
  World.add(world,ball);

  bob3 = Bodies.circle(240,49,10,ball_options);
  World.add(world,ball);

  bob4 = Bodies.circle(170,45,15,ball_options);
  World.add(world,ball);

  bob5 = Bodies.circle(280,35,10,ball_options);
  World.add(world,ball);

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
    rectMode(CENTER);
    ellipseMode(RADIUS);
    background("#99004d");
    
    rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
    push();
    strokeWeight(2);
    stroke(255);
    line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
    line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);
    pop();  
  }
  
  //create ellipse shape for multiple bobs here
    ellipse(bob1.position.x,bob1.position.y,10);
    ellipse(bob2.position.x,bob2.position.y,15);
    ellipse(bob3.position.x,bob3.position.y,10);
    ellipse(bob4.position.x,bob4.position.y,15);
    ellipse(bob5.position.x,bob5.position.y,10);
    
 //Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed ()
{
  if(keyCode==RIGHT_ARROW)
{
  Matter.body.applyForce()
}














