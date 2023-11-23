document.addEventListener("DOMContentLoaded", function () {
  
    var string1 = "Hello, ";
    var string2 = "world!";
    
    var number1 = 5;
    var number2 = 10;
    
    var outputElement = document.getElementById("output");
    

    outputElement.innerHTML = "<h1>" + string1 + string2 + "</h1>";
    
    
    outputElement.innerHTML += "<p>Number 1: " + number1 + "</p>";
    outputElement.innerHTML += "<p>Number 2: " + number2 + "</p>";
});
