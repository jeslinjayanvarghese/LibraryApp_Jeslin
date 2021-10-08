const express = require('express');
//create a route handler
const app = new express(); 

// const bodyParser = require('body-parser');

const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/admin',name:'Add Book'
    },
    {
        link:'/addauthor',name:'Add Author'
    },
    {
        link:'/signup',name:'Sign Up'
    },
    {
        link:'/login',name:'Login'
    },
    {
        link:'/logout',name:'Log Out'
    }

];

const booksRouter = require('./src/routes/bookRoutes')(nav); //To access all files from bookRoutes.js
const authorRouter = require('./src/routes/authorRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
const addAuthorRouter = require('./src/routes/addAuthorRoutes')(nav);

app.use(express.urlencoded({extended:true})); //middleware accessing wen using post method
app.use(express.static('./public'));
app.set('view engine','ejs'); 
app.set('views','./src/views'); 

app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/admin',adminRouter);
app.use('/addauthor',addAuthorRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);



app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title: 'Library'
    }); 
});

// app.get('/admin/add', adminRouter);

app.get('/logout',function(req,res){
    res.render("index",
    {
        nav,
        title: 'Library'
    }); 
});

app.listen(5005);







