const express = require('express');
const authorRouter = express.Router(); 

//to get the nav value we are defining a calling function
function router(nav){
//Book List has to be passed before the book router
var authors = [
    {
     author: 'Joseph Barbera',
     genre: 'Cartoon',
     image: "jb.jpg",
     books: 'Tom And Jerry'
 
    },
    {
    
     author: 'J K Rowling',
     genre: 'Fantasy',
     image: "jk.jpg",
     books: 'Harry Potter'

    },
    {
  
     author: 'Vaikom Basheer',
     genre: 'Drama',
     image: "b.jpg",
     books: 'Thenmavu'
 
    } 
 ]
 
 authorRouter.get('/',function(req,res){
     res.render("authors",
     {
         nav,
         title: 'Library',
         authors
     }); 
 });

 //:i u can use any variable to get the i value from the url
 authorRouter.get('/:id',function(req,res){
    const id = req.params.id;
    res.render('author',{
         nav,
        title: 'Library',
        author: authors[id]
    });
});
return authorRouter;

}


module.exports = router;
