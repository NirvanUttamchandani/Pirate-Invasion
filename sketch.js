const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas, angle, tower, ground, cannon;
var backgroundImg;
var towerImg;
var canonImg;

function preload(){
  backgroundImg = loadImage("./assets/background.gif");
  towerImg = loadImage("./assets/tower.png");
 // cannonImg = loadImage("./assets/cannon_base.png");
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI/4;
  tower = new Tower(150,350,160,300);
  ground = new Ground(0,height-1,width*2,1);
  canon = new Canon(180,110,110,50,angle);
  
}

function draw() {
  background(189);
  image(backgroundImg,0,0,width,height);
  Engine.update(engine);
  
  canon.display();
  tower.display();
  ground.display();
}







