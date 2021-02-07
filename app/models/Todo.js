const mongoose = require("mongoose");

const { Schema } = mongoose;

//Defining schema for todo items

const todoSchema = new Schema({
    name: {
        type: String
    },
    creationDate: {
        type: String
    }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;