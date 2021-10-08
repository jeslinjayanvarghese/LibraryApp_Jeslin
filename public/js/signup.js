var email = document.getElementById("email");
var error1 = document.getElementById("emailHelp");
var username = document.getElementById("uname");
var error2 = document.getElementById("unameHelp");
var password = document.getElementById("pd");
//var error3 = document.getElementById("pdHelp");
var password1 = document.getElementById("cpd");
var cpd = document.getElementById("cpdHelp");
var btn = document.getElementById("regbtn");
var strength = document.getElementById('StrengthDisp');
//var pdnomatch = document.getElementById("password-text");

// btn.disabled = true;
function validate()
{
    if(validate1() && emailvalidate() && passwordChanged() && pass2())
    {
        alert("Sign Up Successful! You can Login Now!");
      return true;  
    }
    else{
        alert("Sign Up Failed! Try Again!");
        return false;
    }
}

function validate1(){

    if(email.value.trim()==""||username.value.trim()==""||password.value.trim()==""||password1.value.trim()==""){
        alert("Fields Cannot be Empty!");
        return false;
    }
    else{
        
        return true;
    }

}

function emailvalidate(){
    //var regx = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    // var regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
    //var regx = /^([^./-][A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
    var regx = /^[^\W_](?:[\w.]*[^\W_])?@(?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.|(?:[\w-]+\.)+)(?:[a-zA-Z]{2,3}|[0-9]{1,3})\]?$/;
    if(regx.test(email.value.trim())){
        error1.innerHTML = "Valid Email";
        error1.style.color= "white";
        error1.style.backgroundColor= "green";
        return true;
    }
    else{
        error1.innerHTML = "Invalid Email";
        error1.style.color= "white";
        error1.style.backgroundColor= "red";
        return false;
    }
}


function passwordChanged(){
    
    
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{5,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{2,}).*", "g");

    //var strongRegex = /(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[^A-Za-z0-9])(?=.{8,})/;

    //var mediumRegex = /((?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[^A-Za-z0-9])(?=.{2,}))|((?=.[a-z])(?=.[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/;
    //var password = document.getElementById("pd");
    
    if(password.value.length == 0) {
        strength.innerHTML = 'Type Password!';
        strength.style.color = "white";
        btn.disabled = true;
        return false;
    } else if (false == enoughRegex.test(password.value)) {
        strength.innerHTML = 'More Characters';
        strength.style.color = "white";
        //alert("Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"); 
        btn.disabled = true;
        return false;
    } else if (strongRegex.test(password.value)) {
        strength.innerHTML = '<span style="color:white">Strong Password!</span>';
        strength.style.backgroundColor = "green";
        btn.disabled = false;
        return true;
    } else if (mediumRegex.test(password.value)) {
        strength.innerHTML = '<span style="color:white">Medium Password!</span>';
        strength.style.backgroundColor = "orange";
        btn.disabled = true;
        return false;
    } else {
        strength.innerHTML = '<span style="color:white">Weak Password!</span>';
        strength.style.backgroundColor = "red";
        btn.disabled = true;
        return false;
    }
}


function pass2() {
    //var cpd = document.getElementById("cpdhelp");
    if (password.value.trim() != password1.value.trim()) {
        cpd.innerHTML ="Password Not Matched!";
        cpd.style.color = "white";
        cpd.style.backgroundColor= "red";
        // btn.disabled = true;
        return false;

    } else {
        cpd.innerHTML ="Password Matched!";
        cpd.style.color = "white";
        cpd.style.backgroundColor= "green";
        // btn.disabled = false;
        return true;
    }
}

    
    

