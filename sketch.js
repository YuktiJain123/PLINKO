const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var particles =[];
var plinkos =[];
var divisions= [];

var divisionHeight=300;

function setup() {
  createCanvas(480,600);

  engine = Engine.create();
  world = engine.world;

  for(var k=0;k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }
  ground=new Ground(240,590,480,20);

    for(var j=40;j <=width;j=j+50){
      plinkos.push(new Plinko(j,75));
    }
    for(var j=40;j <=width;j=j+50){
      plinkos.push(new Plinko(j,175));
    }
    for(var j=40;j <=width;j=j+50){
      plinkos.push(new Plinko(j,275));
    }
    for(var j=40;j <=width;j=j+50){
      plinkos.push(new Plinko(j,375));
    }
    for(var j=40;j <=width;j=j+50){
      plinkos.push(new Plinko(j,475));
    }
    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    }
}

function draw() {
  background("black"); 
  Engine.update(engine);
  ground.display();

  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for(var j=40;j<divisions.length;j++){
   plinkos[j].display();
  }
  for(var j=0;j<particles.length;j++){
    particles[j].display();
   }
}