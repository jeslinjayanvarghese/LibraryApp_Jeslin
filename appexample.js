const express = require('express');

const app = new express(); //express constructor
//or
//const app = express(); without new is also correct , just a function

//to get the images,css,js files
app.use(express.static('./public'));

//Now as we have ejs engine we need to set the app
app.set('view engine','ejs'); //(keyword,name of the engine)

app.set('views','./src/views');  //index.ejs is being saved in src/views
//whenever a request comes it should directly go to the views file.

app.get('/',function(req,res){
    //res.sendFile(__dirname + "/src/views/index.html");
    //or
    //res.sendFile("C:/Users/Jeslin Jayan Vargese/Desktop/Library App/src/views/index.html");

    //respond to the client in ejs we have to render
    res.render("index",{books:['book1','book2'],title: 'LIBRARY'}); //no need path its path is already set and  no extension as our ejs has set it as view.ejs
});

app.listen(5000);

