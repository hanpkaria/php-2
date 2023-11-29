
var movingDiv = document.getElementById("movingDiv");


var position = 0;


var animationInterval = setInterval(moveDiv, 100);


movingDiv.addEventListener("click", changeColor);

function moveDiv() {
  
    position += 5;

 
    movingDiv.style.left = position + "px";

  
    if (position >= window.innerWidth - 50) {
     
        position = 0;
    }
}

function changeColor() {
  
    var randomColor = getRandomColor();

    
    movingDiv.style.backgroundColor = randomColor;
}

function getRandomColor() {
  
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}