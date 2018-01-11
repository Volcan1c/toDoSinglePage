$(document).ready(function() {
    $.getJSON("/api/todos")
    .then(addTodos);
    
    $("#todoInput").keypress(function(event) {
        if (event.which == 13) {
            createTodo();
        }
    });
    
    $(".list").on("click", "li", function() {
        updateTodo($(this));
    })
    
    $(".list").on("click", "span", function(event) {
        event.stopPropagation();
        removeTodo($(this).parent());
    });
});

function addTodos(todos) {
    todos.forEach(function(todo) {
        addTodo(todo);
    });
}

function addTodo(todo) {
    var newTodo = $('<li class = "task"> '+todo.name+'<span>X</span></li>');
    newTodo.data("id", todo._id);
    newTodo.data("done", todo.completed);
    if(todo.completed) {
            newTodo.addClass("done");
    }
    $(".list").append(newTodo);
}

function createTodo() {
    var userInput = $("#todoInput").val();
    $.post("/api/todos", {name: userInput})
    .then(function(newTodo) {
        $("#todoInput").val("");
        addTodo(newTodo);
    }).catch(function(err) {
        console.log(err);
    });
}

function removeTodo(parent) {
    var clickedID = parent.data("id");
    var deleteURL = "api/todos/"+clickedID;
    $.ajax({
        method: "DELETE",
        url: deleteURL
    }).then(function(data) {
        parent.remove();
    }).catch(function(err) {
        console.log(err);
    });
}

function updateTodo(todo) {
    var clickedID = todo.data("id");
    var updateURL = "api/todos/"+clickedID;
    var isDone = todo.data("done");
    var upData = {completed: !isDone};
    $.ajax({
        method: "PUT",
        url: updateURL,
        data: upData
    })
    .then(function(updated) {
        todo.toggleClass("done");
        todo.data("done", !isDone);
    })
    .catch(function(err) {
        console.log(err);
    })
}