var ballX = 20;
var ballY = 20;
var ball2X = 260;
var ball2Y = 330;
var pacman;

function preload() {
 pacman = loadImage("/assets/pacman.png");
}
function setup() {
	createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(150);
  fill('black');
  textAlign(CENTER);
  textSize(18);
  text("Turn your phone down or right to move Pacman and get to the ball. Be careful: you can't go back!", 20, 370, 280, 300);
  fill('black');
  image(pacman, ballX, ballY, 50, 50);
  ellipse(ball2X, ball2Y, 10,10);
    
  var distance = dist(ballX, ballY, ball2X, ball2Y);
  
  
  if (distance < 60) {
      
      fill('black');
      rect(0,0,1000, 1000);
      fill('white');
      textSize(25);
      textAlign(CENTER);
      text('You won!', windowWidth/2, windowHeight/2);
  }
  
 }

function deviceTurned() {
  if (turnAxis == 'Y'){
    ballX = ballX + 20;
  }
    

  
  else if (turnAxis == 'X'){
    ballY = ballY + 20;
  }
    

    
}