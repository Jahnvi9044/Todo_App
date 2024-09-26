
const mongoose = require('mongoose');

/*

Todo  {
   
   title: String
   description: String
   completed: boolean    

    }
*/

mongoose.connect('mongodb+srv://jahnvichaurasia481:2kjNAChDbp0MVSLE@cluster0.jlgjffa.mongodb.net/todoList');
//always give in .env file
//this will be discussed later 

const TodoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed: Boolean
});

const Todo = mongoose.model('Todo',TodoSchema);

module.exports = {
    Todo
}