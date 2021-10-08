function login(cb){
    var email = document.getElementById("email");
    var password = document.getElementById("pd");
    var error = document.getElementById("pdhelp");

    if(email.value.trim() == "admin" && password.value.trim() == "12345"){
        cb();
        error.innerHTML = " ";
        error.style.color= "green";
        return true;
    }
    else{
       
        error.innerHTML = "Invalid Credentials";
        error.style.color= "white";
        return false; 
    }
}
function validate(){
        alert("Login Successful!");
       
       // window.location.href = 'index.ejs'; 
}