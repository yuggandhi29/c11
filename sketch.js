var runner,runnerimage,path,pathimage,coin,coinimage
function preload(){
runnerimage = loadAnimation("Runner-1.png","Runner-2.png")
pathimage = loadImage("path.png")
}

function setup(){
   createCanvas(400,400); 
   sea = createSprite(0,0,400,400)
    sea.addImage("sea",seaimage)
     sea.velocityX = -7
      ship = createSprite(200,200,5,5) 
      ship.addAnimation("ship",shipimage) 
      ship.scale=0.3 
      sea.velocityX = -4 

function draw() {
  background("black");
  drawSprite()
}


















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































