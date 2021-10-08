//Accessing mongoose package
const mongoose = require('mongoose');
//db connection
mongoose.connect('mongodb://localhost:27017/library');

//mongoose.connect('mongodb+srv://user1:user1@ictakfiles.u1wj7.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');



//acess schema from the mongoose package
//Schema definition
const Schema = mongoose.Schema;

//create a schema for a single book  //db structure
const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String //image and the file name of the image is also saved so its a string
});
//to use the schema we need to embed it to a model
//Model Creation
var Bookdata = mongoose.model('bookdata',BookSchema);  //collectionName,SchemaName

//bookdata is singular but after adding it to db , it become 'bookdatas' ie done by mongodb to make it plural

module.exports = Bookdata; //exporting 



