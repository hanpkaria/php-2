// Get the div element by its ID
var movingDiv = document.getElementById("movingDiv");

// Initial position
var position = 0;

// Set up the setInterval to move the div every 100 milliseconds
var animationInterval = setInterval(moveDiv, 100);

function moveDiv() {
    // Increment the position (move to the right)
    position += 5; // Adjust the value for the desired speed

    // Apply the new position to the left style property
    movingDiv.style.left = position + "px";

    // Check if the div has reached the right edge of the screen
    if (position >= window.innerWidth - 50) {
        // Reset the position to the left
        position = 0;
    }
}