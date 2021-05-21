// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here

applyFilter(reddify);
applyFilter(decreaseBlue);
applyFilter(increseGreen);
applyFilterNoBackground(decreaseBlue);
applyFilterNoBackground(reddify);

    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1 & 3: Create the applyFilter function here

function applyFilter(filterFunction){
    for (var r = 0; r <image.length; r++) { 
         for (var c = 0; c <image[r] ; c++) { 
             var rgbString = rgbArrayToString;
             var rgbNumbers = rgbStringToArray(rgbString); 
            console.log(r + ", " + c);
        }
    }
}
filterFunction(rgbNumbers);
    rgbString = rgbStringToArray(rgbString)
    image[r][y] = rgbString;
// TODO 5: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
    for (var r = 0; r <image.length; r++) { 
         for (var c = 0; c <image[r].length ; c++){

         }
}
    var rgbString = image[r][c];
    var rgbNumbers = rgbArrayToString(rgbString);
    if (image[r][c] === image[0][0]){
        (image[r][c] = image[0][0])
    }
    else{
        filterFunction(rgbNumbers);
        rgbString = rgbArrayToString(rgbNumbers);
        image[r][c]
    }
// TODO 2 & 4: Create filter functions
function reddify(change){
    change[red] = 255;
}
function increseGreen(change){
   change[blue] = math.min(change[blue] + change[green], 255);
}
function decreseBlue(change){
    change[blue] = math.max(0, change[blue] - 30);
}
// CHALLENGE code goes below here///
