let txtName = document.getElementById("#txtName");
let dvOutput = document.getElementById("#dvOutput");

function myFunction() {
  
  if(document.getElementById("username").value == "Username" && document.getElementById("password").value == "Password") {
      document.getElementById("result").innerHTML = "Success";
  } else {
      document.getElementById("result").innerHTML = "Wrong Information";
  }
}