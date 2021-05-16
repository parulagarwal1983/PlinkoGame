const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,600,width,20);

  for(var d = 0;d <= width;d = d + 80){
    divisions.push(new Division(d,height-divisionHeight/2,10,divisionHeight));
  }

  for(var p = 0; p <= width; p = p + 40){
    plinkos.push(new Circle(p,50));
  }

  for(var p = 20; p <= width; p = p + 40){
    plinkos.push(new Circle(p,90));
  }

  for(var p = 0; p <= width; p = p + 40){
    plinkos.push(new Circle(p,130));
  }

  for(var p = 20; p <= width; p = p + 40){
    plinkos.push(new Circle(p,170));
  }

  for(var p = 0; p <= width; p = p + 40){
    plinkos.push(new Circle(p,210));
  }
}

function draw() {
  background("black");  

  Engine.update(engine);

  for(var d = 0 ; d < divisions.length; d++){
    divisions[d].display();
  }

  for(var p = 0 ; p < plinkos.length ; p++){
    plinkos[p].display();
  }

  if(frameCount % 60 ===0){
    particles.push(new Particles(random(230,270),10,8));
  }

  for(var b = 0; b < particles.length ; b++){
    particles[b].display();
  }

  ground.display();
  
  drawSprites();
}