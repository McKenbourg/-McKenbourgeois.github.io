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
  "UP": 38,
  "DOWN":40
}
  
  // Game Item Objects
var positionX = 0; // the x-coordinate location for the box
var positionY = 0;
var speedX = 0; // the speed for the box along the x-axis
var speedY = 0;
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                        // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);                         // to stop
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    //update the position  of the game itiam on evry frame
    repositionBox();
    //check for collisions

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    //press up key --> accelerate box in negitive y direction
    //press down key --> accelerate box in positive y direction
    //and so on for left (-x) and right (+x)
  
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

  function repositionBox(newFrame){
    //move the box to a new x location
    positionX += speedX; // update the position of the box along the x-axis
     $("#gameItem").css("left", positionX);  // draw the box in the new location, positionX pixels away from the "left"
      
    //move the box to a new y location
    positionY += speedY;
    $("#gameItem").css("top", positionY);
}
  function redrawGameItem(newFrame){
     
    }

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
