var y = Math.floor(Math.random() * 10 + 1);
   var guess = 1; 
   document.getElementById("submitguess").onclick = function(){
var x = document.getElementById("guessField").value;
if(x == y)
{     
   alert("Correct! Great Job:) "+ guess + " GUESS ");
}
else if(x > y)
{     
   guess++;
   alert("The number is smaller than your guess");
}
else
{
   guess++;
   alert("The number is bigger than your guess")
}
   }