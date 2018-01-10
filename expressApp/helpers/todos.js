var db = require("../models");

exports.getTodos = function(req, res) {
    db.Todo.find()
    .then(function(todo) {
        res.json(todo);
    }).catch(function(err) {
        res.send(err);
    });
};

exports.createTodo = function(req, res) {
    db.Todo.create(req.body)
    .then(function(todoItem) {
        res.status(201).json(todoItem);
    })
    .catch(function(err) {
        res.send(err);
    });
};

exports.getTodo = function(req, res) {
    db.Todo.findById(req.params.todoID)
    .then(function(foundTodo) {
        res.json(foundTodo);
    }).catch(function(err) {
        res.send(err);
    });
};

exports.updateTodo = function(req, res) {
    db.Todo.findOneAndUpdate({_id: req.params.todoID}, req.body, {new: true})
    .then(function(newTodo) {
        res.json(newTodo);
    }).catch(function(err) {
        res.send(err);
    });
};

exports.deleteTodo = function(req, res) {
    db.Todo.remove({_id: req.params.todoID})
    .then(function() {
        res.json({message: "we deleted it"});
    });
};

module.exports = exports;