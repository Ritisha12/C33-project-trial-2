  var Engine = Matter.Engine,
   World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[]

var particle
var turn=0
var counter=0
var yellowLine
var engine
var world
var ground
var divisionHeight=300;
var score =0;
var gameState="play"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  
  ground = new Ground(width/2,height,width,20);

  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75,10));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175,10));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275,10));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375,10));
    }

  

    
}
 


function draw() {
  background("black");
  fill("yellow")
  strokeWeight(4)
line(0,550,800,550)
  
  textSize(20)
 text("Score : "+score,20,30);

 text("200",580,600)
 text("200",670,600)
 text("200",740,600)

 text("100",335,600)
 text("100",420,600)
 text("100",495,600)
 
 text("500",25,600)
 text("500",100,600)
 text("500",175,600)
 text("500",260,600)
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
     //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   //}
   if(particle!=null){
    
    particle.display(
    )
    if (particle.body.position.y>760) {
    console.log(particle.body.position.x)
    if(particle.body.position.x<300){
      score=score+500
      particle=null
    }

    else if(particle.body.position.x>301&&particle.body.position.x<600){
      score=score+100
      particle=null
    }

    else if(particle.body.position.x>601&&particle.body.position.x<900){
      score=score+200
      particle=null
    }
  }
}


  //for (var j = 0; j < particles.length; j++) {
   
    // particles[j].display();
   //}
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(counter>5){
    gameState==="end"
    textSize(50)
    text("GAME OVER",250,450)
  }
}

function mousePressed(){
  if(gameState!=="end"){
    score++
    counter=counter+1
    particle=new Particle(mouseX,10,10,10)}
    
  }
  

