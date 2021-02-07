const Todo = require('../models/Todo');

class TodoRepository {

    constructor(model) {
        this.model = model;
    }

    create(name) {
        const newTodo = {
            name,
            isDone: false
        };
        const todo = new this.model(newTodo);

        return todo.save();
    }

    findAll() {
        return this.model.find();
    }

    findById(id) {
        return this.model.findById(id);
    }

    deleteById(id) {
        return this.model.findByIdAndDelete(id);
    }

    updateById(id, object) {
        const query = {
            _id: id
        };
        return this.model.findOneAndUpdate(query, {
            $set: {
                isDone: object.isDone
            }
        });
    }
}
module.exports = new TodoRepository(Todo);