const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ball, slingShot, platform, platform2;

function setup() {
  var canvas = createCanvas(2000, 600);
  engine = Engine.create();
  world = engine.world;

  box1 = new PinkBox(500, 450, 50, 50);
  box2 = new BlueBox(600, 450, 50, 50);
  box3 = new GreenBox(700, 450, 50, 50);
  box4 = new PinkBox(800, 450, 50, 50);
  box5 = new BlueBox(900, 450, 50, 50);
  box6 = new BlueBox(550, 400, 57, 57);
  box7 = new GreenBox(650, 400, 57, 57);
  box8 = new BlueBox(750, 400, 57, 57);
  box9 = new GreenBox(850, 400, 57, 57);
  box10 = new PinkBox(600, 350, 53, 53);
  box11 = new PinkBox(700, 350, 53, 53);
  box12 = new GreenBox(800, 350, 53, 53);
  box13 = new BlueBox(650, 300, 57, 57);
  box14 = new PinkBox(750, 300, 57, 57);
  box15 = new GreenBox(700, 250, 53, 53);

  platform2 = new Platform(200, 600, 300, 300);
  platform = new Platform(700, 500, 500, 10);
  ground = new Ground(600, height, 1200, 20);
  ball = new Ball(100, 100);

  sling = new SlingShot(ball.body, { x: 180, y: 290 });
}

function draw() {
  background("greenyellow");
  Engine.update(engine);
  strokeWeight(4);

  platform2.display();
  platform.display();
  ground.display();
  ball.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  sling.display();
}
function keyPressed() {
  if (keyCode === 32) {
    sling.reattach(ball.body);
  }
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  sling.fly();
}
