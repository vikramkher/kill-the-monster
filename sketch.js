const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var superhero,ground,fly,tower1,tower2,tower3,tower4,tower5,monster;
var engine, world;

function preload() {
backgroundImg=loadImage("GamingBackground.png")

//MonsterImage=loadImage("Monster-01.png")

}

function setup() {
  engine=Engine.create()
  world=engine.world
  createCanvas(3000, 800);
   
  ground=new Ground(500,300,720,20)
  monster=new Monster(800,100,100)
  superhero=new Superhero(80,25,30)
  fly=new Fly(superhero.body,{x:250,y:50})
 

  tower1=new Tower(530,50,30,50)
  tower2=new Tower(530,100,30,50)
  tower3=new Tower(530,150,30,50)
  tower4=new Tower(530,200,30,50)
  tower5=new Tower(530,250,30,50)
  

  tower6=new Tower(650,50,30,50)
  tower7=new Tower(650,100,30,50)
  tower8=new Tower(650,150,30,50)
  tower9=new Tower(650,200,30,50)
  tower10=new Tower(650,250,30,50)

  tower11=new Tower(590,50,30,50)
  tower12=new Tower(590,100,30,50)
  tower13=new Tower(590,150,30,50)
  tower14=new Tower(590,200,30,50)
  tower15=new Tower(590,250,30,50)
  
  

}

function draw() {
  background(backgroundImg);
  Engine.update(engine)
  ground.display()
  
  tower1.display();
  tower2.display();
  tower3.display();
  tower4.display();
  tower5.display();
  tower6.display();
  tower7.display();
  tower8.display();
  tower9.display();
  tower10.display();
  tower11.display();
  tower12.display();
  tower13.display();
  tower14.display();
  tower15.display();

  superhero.display();
 // fly.display();
  monster.display();
 

}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY})

}

