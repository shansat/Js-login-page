function validate(){
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
if ( username == "user" && password == "pwd1"){
alert ("Login successfully");
window.location = "about.html"; 
return false;
}
else{
    alert("Login failed");
return false;
}
}

