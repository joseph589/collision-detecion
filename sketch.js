var fixedRect, movingRect;

function setup() {
  createCanvas(600,600); 

  // creates 2 sprites and adds color to them
  fixedRect = createSprite(300,300,40,100);
  movingRect = createSprite(100,100,100,50);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  
}

function draw() {
  background(0);  
  //makes the movingRect move using mouse
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  // print on the console sum of the hakf of the width of the rects
  console.log(movingRect.width/2+fixedRect.width/2);
  //difference of the x positions of the rects
  console.log(movingRect.x-fixedRect.x);

  //collision detection
  if(movingRect.x-fixedRect.x <= movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x <= movingRect.width/2+fixedRect.width/2 
    && fixedRect.y-movingRect.y <= movingRect.height/2+fixedRect.height/2
    && movingRect.y-fixedRect.y <= movingRect.height/2+fixedRect.height/2
    ){ 
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}