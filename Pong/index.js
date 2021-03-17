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
  "LEFT": ,
  "RIGHT": ,
  "UP":   ,
  "DOWN":  ,
  }
  // Game Item Objects
// Initialization
var ball = gameItem("#ball");
var rightpaddle = gameItem("#rightpaddle");
var leftpaddle = gameItem("#leftpaddle");

// Helper Functions
function gameItem() {
  var gameItem = {};
  gameItem.id = id ;
  gameItem.x = ($($id).css("left")) ;
  gameItem.y = ($($id).css("top")) ;
  gameItem.speedX = 0 ;
  gameItem.speedY = 0 ;
  return gameItem;
}

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
  function newFrame() {
    

  }
  
  /* 
  Called in response to events.
  */

function handleKeyDown(event) {
    //press up key --> accelerate box in negitive y direction
    //press down key --> accelerate box in positive y direction
    //and so on for left (-x) and right (+x)
  
    if( event.which === KEY.LEFT){
       speedX = - 5;
    }
     if( event.which === KEY.UP){
       speedY = - 5;
    }
     if( event.which === KEY.RIGHT){
        speedX = 5;
    }
     if( event.which === KEY.DOWN){
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
  
}
