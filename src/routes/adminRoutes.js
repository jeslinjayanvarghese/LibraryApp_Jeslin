const express = require('express');
const adminRouter = express.Router(); 

const Bookdata = require('../model/bookdata'); //accessed the exported bookdata.js


//to get the nav value we are defining a calling function
function router(nav){

   adminRouter.get('/',function(req,res){ //"/" represents /admin
     res.render("addbook",
     {
         nav,
         title: 'Library',
     });
 });

    adminRouter.post('/add',function(req,res){
     //  res.send("Hey I am Added");

    //  var item = {
    //     title: req.query.title,
    //     author: req.query.author,  //incase of get method
    //     genre: req.query.genre,
    //     image: req.query.image
    //  }
     var item = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        pages: req.body.pages,
        image: req.body.image
     }
        var book = Bookdata(item);
        book.save();  //saving it into db
        res.redirect('/books');
 });



return adminRouter;

}
module.exports = router;
