const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,object
var ball,ball1
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world = engine.world;
  box1=new Box(200,100,70,70)
  ground=new Ground(400,390,800,20)
 
 
  
}

function draw() {
  background(255,255,255);
  Engine.update(engine)
  box1.display()
  ground.display()

}
