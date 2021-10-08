var title = document.getElementById("title");
var etitle = document.getElementById('etitle');
var author = document.getElementById('author');
var eauthor = document.getElementById('eauthor');
var genre = document.getElementById('genre');
var egenre = document.getElementById('egenre');
var image = document.getElementById('image');

var error = document.getElementById("error");



 function validempty(){

    if(title.value.trim()==""||author.value.trim()==""||genre.value.trim()==""||image.value.trim()==""){
        alert("Fields Cannot be Empty!");
        return false;
    }
    else{
        return true;
    }
 }


function validtitle(){
    lregex=/^[A-Za-z0-9 ]+$/
    //if(lregex.test(title.value)){
        if(title.value.match(lregex)){
        etitle.innerHTML = "";
        etitle.style.color= "green";
        return true;
    }
    else{
        etitle.innerHTML = "Title can contain letters or numbers only";
        etitle.style.color= "red";
        return false;
    }

}

function validauthor(){
    lregex=/^[A-Za-z ]+$/
    if(lregex.test(author.value)){
        eauthor.innerHTML = "";
        eauthor.style.color= "green";
        return true;
    }
    else{
        eauthor.innerHTML = "Author should be letters only";
        eauthor.style.color= "red";
        return false;
    }
}

function validgenre(){
    lregex=/^[A-Za-z ]+$/
    if(lregex.test(genre.value)){
        egenre.innerHTML = "";
        egenre.style.color= "green";
        return true;
    }
    else{
        egenre.innerHTML = "Genre should be letters only";
        egenre.style.color= "red";
        return false;
    }
}

function validate(){
    if(validempty() && validtitle() && validauthor() && validgenre())
    {
        error.innerHTML = " ";
        error.style.color= "green";
        return true;
    } 
    else{
        error.innerHTML = "Invalid Inputs";
        error.style.color= "red";
        return false;
    }

}