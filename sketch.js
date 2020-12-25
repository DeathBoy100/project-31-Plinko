const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Particles = []
var Plinko = []
var Division = []
var divisionHeight = 200
var grnd;

function setup() {
  createCanvas(480,800);
  
   engine = Engine.create();
  world = engine.world;
  
  /*if(frameCount%180 === 0)
  {
    Particles.push(new particle(random((width/2)-10,(width/2)+10),10,10))
  }
*/
  for(var k = 0; k <= width; k = k + 80){
    Division.push(new division(k,500,10,divisionHeight))
  }
  
  for(var i = 40; i <= width; i=i+50){
    Plinko.push(new plinko(i,75,10))
  }

  for(var a = 15; a <= width-10; a=a+50){
    Plinko.push(new plinko(a,135, 10))
  }

  for(var b = 27; b <= width-10; b=b+50){
    Plinko.push(new plinko(b,195, 10))
  }

  for(var c = 15; c <= width-10; c=c+50){
    Plinko.push(new plinko(c,255, 10))
  }

  grnd = new Ground(width/2, 600, width, 10)

}

function draw() {
  background("lightblue");  
  Engine.update(engine);
  
  for(var z = 0; z < Division.length; z++){
    Division[z].display()
  }

  for(var d = 0; d < Plinko.length; d++){
    Plinko[d].display()
  }

  if(frameCount%60 === 0)
  {
    Particles.push(new particle(random((width/2)-80,(width/2)+80),10,10))
  }
  for(var s = 0; s < Particles.length; s++){
    Particles[s].display()
  }
  console.log(frameCount);
  grnd.display();

}