var db = require("../models");

//Defining the GET route of the API for all the todos
exports.getTodos = function(req, res) {
    db.Todo.find()
    .then(function(todo) {
        res.json(todo);
    }).catch(function(err) {
        res.send(err);
    });
};

//Defining the POST route of the API
exports.createTodo = function(req, res) {
    db.Todo.create(req.body)
    .then(function(todoItem) {
        res.status(201).json(todoItem);
    })
    .catch(function(err) {
        res.send(err);
    });
};

//Defining the GET route of the API of a single todo
exports.getTodo = function(req, res) {
    db.Todo.findById(req.params.todoID)
    .then(function(foundTodo) {
        res.json(foundTodo);
    }).catch(function(err) {
        res.send(err);
    });
};

//Defining the PUT route of the API
exports.updateTodo = function(req, res) {
    db.Todo.findOneAndUpdate({_id: req.params.todoID}, req.body, {new: true})
    .then(function(newTodo) {
        res.json(newTodo);
    }).catch(function(err) {
        res.send(err);
    });
};

//Defining the DELETE route of the API
exports.deleteTodo = function(req, res) {
    db.Todo.remove({_id: req.params.todoID})
    .then(function() {
        res.json({message: "we deleted it"});
    });
};

module.exports = exports;