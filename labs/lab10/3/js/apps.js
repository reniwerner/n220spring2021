function myFunction(clicked) {
    if (clicked=="Indianapolis")
    document.getElementById("answer").innerHTML = "Correct, Great job!! "+clicked; 
    else
    document.getElementById("answer").innerHTML = "Wrong, it is Indianapolis";
    }        