const express = require('express');
const signupRouter = express.Router(); 

//to get the nav value we are defining a calling function
function router(nav){
//Book List has to be passed before the book router
var books = [
    {
     title: 'Tom And Jerry',
     author: 'Joseph Barbera',
     genre: 'Cartoon',
     image: "tom.jpg"
 
    },
    {
     title: 'Harry Potter',
     author: 'J K Rowling',
     genre: 'Fantasy',
     image: "harry.jpeg"
 
    },
    {
     title: 'Thenmavu',
     author: 'Vaikom Basheer',
     genre: 'Drama',
     image: "basheer.jpeg"
 
    } 
 ]
 
 signupRouter.get('/',function(req,res){
     res.render("signup",
     {
         nav,
         title: 'Sign Up',
         books
     }); 
 });

 //:i u can use any variable to get the i value from the url
// booksRouter.get('/:id',function(req,res){
//     const id = req.params.id;
//     res.render('book',{
//          nav,
//         title: 'Library',
//         book: books[id]
//     });
// });
return signupRouter;

}


module.exports = router;
