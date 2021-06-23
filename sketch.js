const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var backgroundImg;
var palyer, playerBase;
var computer, computerBase;
var sound
function preload(){
  backgroundImg = loadImage("assets/op.gif");
sound = loadSound("assets/jake.mp3");
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //Initialising Engine
   engine = Engine.create();
  world = engine.world;
  
	//Create Player Base and Computer Base Object
  playerBase = new PlayerBase
  (300, random(451, height - 300), 180, 150);
  
  player = new Player
  (300, playerBase.body.position.y - 153, 50, 180);


computerBase = new ComputerBase
(width - 300,random(450, height - 300),180,150);

computer = new Computerp
(width - 285,computerBase.body.position.y - 153,50,180);
sound.play();
//sound.loop();
 }

function draw() {

  background(180);
  image(backgroundImg, 0, 0, width, height);
  
  Engine.update(engine);

  // Title
  fill(66, 245, 230);
  textAlign("center");
  textSize(40);
  text("🏁EPIC ARCHERY🏁", width / 2, 100);

   //Display Playerbase and computer base 
   playerBase.display();
  player.display();
   
  //display Player and computerplayer
  computerBase.display();
  computer.display();
  


}
