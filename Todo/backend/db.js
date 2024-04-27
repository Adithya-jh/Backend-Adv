const mongoose = require('mongoose');

/*
Todo schema looks like -

Todo {
    title:string,
    description:string,
    completed:boolean
}
*/

mongoose.connect(
  'mongodb+srv://JHA:adith%402003@cluster0.0tkqt.mongodb.net/todos'
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model('todos', todoSchema);

module.exports = { todo: todo };
