// Login Page Script
function myfunction(){
    var un = document.forms["LoginForm"]["Uname"].value;
    var pass = document.forms["LoginForm"]["Pass"].value;
    if(un=="Dheeraj" && pass=="1234"){
        window.location.href = "port1.html";
    }
    else if(un=="Dipanshu" && pass=="5678"){
        window.location.href = "port2.html";
    }
    else{
        alert("Invalid username");
    }
}