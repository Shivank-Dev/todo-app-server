const repository = require('../repositories/TodoRepository');

class AppRouter {

    constructor(app) {
        this.app = app;
    }

    initRoutes() {

        //  this api to verify server running status

        this.app.get('/ping', (req, res) => {
            res.send(new Date());
        });

        // get all todo items from the db

        this.app.get('/getAllTodos', async (req, res) => {
            try {
                const todos = await repository.findAll();
                res.json(todos);
            } catch (error) {
                console.error("error inside getAllTodo", error);
                res.sendStatus(500);
            }
        })

        // add a todo item into the db

        this.app.post('/addTodo', async (req, res) => {
            try {
                const {
                    name
                } = req.body;
                const todo = await repository.create(name);
                res.json(todo);
            } catch (error) {
                res.sendStatus(500);
            }
        });

        // delete todo item from the db

        this.app.delete('deleteTodo/:id', async (req, res) => {
            try {
                const {
                    id
                } = req.params;
                const todo = await repository.deleteById(id);
                console.log("todo inside delete ", todo)
                res.status(200).json([]);
            } catch (error) {
                console.error("error ", error);
                res.sendStatus(500);
            }
        })

        // update todo item from the db
        this.app.put('/updateTodo/:id', async (req, res) => {
            try {
                const {
                    id
                } = req.params;
                const todo = {
                    name: req.body.name,
                    isDone: req.body.isDone
                }
                const updateTodo = await repository.updateById(id, todo);
                console.log("updateTodo inside update ", updateTodo)
                res.status(200).json([])
            } catch (error) {
                console.log("error ", error);
                res.sendStatus(500);
            }
        })
    }
}

module.exports = AppRouter;