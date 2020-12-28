// Code to be able to logn on login.html

// Variable to count number of attempts to login
var attempt = 3; 

// Function executes when clicking on "login button"
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

if ( username == "essie" && password == "nagellack123"){
alert ("Login successfully");
window.location = "admin.html"; // Redirecting to other page
return false;
}
else{
attempt --;// Decrementing by one
alert("You have left "+attempt+" attempt;");

// Disabling fields after 3 attempts
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}}