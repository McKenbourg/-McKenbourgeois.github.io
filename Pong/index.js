/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  // new constant variable//
  var KEY = {
  "LEFT": 37,
  "RIGHT": 39,
  "UP":  38,
  "DOWN": 40,
  }
  // Game Item Objects
// Initialization
var ball = gameItem("#ball");
var rightpaddle = gameItem("#rightPaddle");
var leftpaddle = gameItem("#leftPaddle");
var score1 = gameItem("#score1");
var score2 = gameItem("#score2");


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('handleKeyDown', handleEvent);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
 function repositionBall() {
  box.x += box.speedX;                 // update the position of the box along the x-axis
    $("#ball").css("left", gameItem.x);    // draw the ball in the new location, positionX pixels away from the "left"
    $("#ball").css("top", gameItem.y)
}
  function repositionrightPaddle() {
  box.x += box.speedX;                
    $("#rightPaddle").css("left",gameItem.x);  
    $("#rightPaddle").css("top", gameItem.y)
}

function repositionleftPaddle() {
  positionX += speedX;                 
    $("#leftPaddle").css("left", gameItem.x);  
    $("#leftPaddle").css("top", gameItem.y)
}
 
//collison detection//
function doCollide(ball, leftPaddle, rightPaddle ){
   if (doCollide(ball, leftPaddle) || 
		doCollide(rightPaddle, ball)) {
        showResult(true);
    } else {
        showResult(false);
    }
}

  /* 
  Called in response to events.
  */
 function handleKeyDown(event) {
    //press up key --> accelerate box in negitive y direction
    //press down key --> accelerate box in positive y direction
    //and so on for left (-x) and right (+x)
  
        var keycode = event.which;
             console.log(keycode);
  

     if( event.which === KEY.LEFT){
        //console.log("left arrow pressed");
       // positionX = positionX - 10;
       speedX = - 5;
    }
     if( event.which === KEY.UP){
        //console.log("up arrow pressed");
         //positionY = positionY - 10;
         speedY = - 5;
    }
     if( event.which === KEY.RIGHT){
        //console.log("right arrow pressed");
         //positionX = positionX + 10;
         speedX = 5;
    }
     if( event.which === KEY.DOWN){
       // console.log("down arrow pressed");
         //positionY = positionY + 10;
         speedY = 5;
    }
}

 function handleKeyUp(event) {
     //to stop box from moving
    
    if( event.which === KEY.LEFT){
       speedX = - 0;
    }
     if( event.which === KEY.UP){
         speedY = - 0;
    }
     if( event.which === KEY.RIGHT){
         speedX = 0;
    }
     if( event.which === KEY.DOWN){
         speedY = 0;
    }
}


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
 // Helper Functions//
var ball = {};
ball.x =100;
ball.y = 50;
box.speedX = 1;
ball.speedY = 1;
ball.id = "#ball";

var rightPaddle = {};
rightPaddle.x = 100;
rightPaddle.y = 50;
rightPaddle.speedX = 1;
rightPaddle.speedY = 1;
rightPaddle.id = "#rightPaddle";

var leftPaddle = {};
leftPaddle.x = 100;
leftPaddle.y = 50;
leftPaddle.speedX = 1;
leftPaddle.speedY = 1;
leftPaddle.id = "#leftPaddle";

