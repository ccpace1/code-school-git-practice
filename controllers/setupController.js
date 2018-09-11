const Todos = require('../models/todoModel.js');

module.exports = function (app) {
    app.get('/api/setupTodos', function(req,res) {
    const starterTodos = [
        {
            username: 'cpace',
            todo: 'keep Kevin moving',
            isDone: false
        },
        {
            username: 'cpace',
            todo: 'learn more',
            isDone: false
        },
        {
            username: 'cpace',
            todo: 'pick on Kevin',
            isDone: false
        }
    ];
    Todos.create(starterTodos, function(err, results) {
        res.send(results);
        }
    )
    })
};