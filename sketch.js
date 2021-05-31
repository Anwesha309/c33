var bgImg,snowflake,snowflake2,snowflake3,snowflake4,snowflake5,snowflakeImg,snowflakeImg2;
function preload(){
  bgImg=loadImage("snow3.jpg")
  snowflakeImg=loadImage("snow4.webp")
  snowflakeImg2=loadImage("snow5.webp")
}
function setup() {
  createCanvas(800,400)
 // engine = Engine.create();
 // world = engine.world;
 snowflake=createSprite(70,70,20,20)
 snowflake.addImage(snowflakeImg)
 snowflake.scale=0.3
 snowflake2=createSprite(300,40,20,20)
 snowflake2.addImage(snowflakeImg2)
 snowflake2.scale=0.2
 snowflake3=createSprite(70,280,20,20)
 snowflake3.addImage(snowflakeImg)
 snowflake3.scale=0.24
 snowflake4=createSprite(450,80,20,20)
 snowflake4.addImage(snowflakeImg2)
 snowflake4.scale=0.16
 snowflake5=createSprite(700,310,20,20)
 snowflake5.addImage(snowflakeImg)
 snowflake5.scale=0.45
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(bgImg);
  //Engine.update(engine);
  drawSprites();
}