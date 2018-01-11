//Waiting for the DOM to get ready before issuing listeners to its elements
$(document).ready(function() {
    //Ajax: Requesting the todos from the api
    $.getJSON("/api/todos")
    .then(addTodos);
    //Listening for "enter" keypress
    $("#todoInput").keypress(function(event) {
        if (event.which == 13) {
            createTodo();
        }
    });
    //Update todo when the li has been clicked
    $(".list").on("click", "li", function() {
        updateTodo($(this));
    })
    //Delete todo when the "X" has been clicked
    $(".list").on("click", "span", function(event) {
        event.stopPropagation(); //stopping event bubbling, when span "X" is clicked it will not trigger the li event
        removeTodo($(this).parent());
    });
});

//Iterating through the retreived todos
function addTodos(todos) {
    todos.forEach(function(todo) {
        addTodo(todo);
    });
}

//Adding the todo as li in the ul + storing the id and the status in it (jQuery)
function addTodo(todo) {
    var newTodo = $('<li class = "task"> '+todo.name+'<span>X</span></li>');
    newTodo.data("id", todo._id);
    newTodo.data("done", todo.completed);
    if(todo.completed) {
            newTodo.addClass("done");
    }
    $(".list").append(newTodo);
}

//Ajax: posting the new todo to the api
function createTodo() {
    var userInput = $("#todoInput").val(); //accessing the text from the form
    $.post("/api/todos", {name: userInput})
    .then(function(newTodo) {
        $("#todoInput").val(""); //clearing the text form
        addTodo(newTodo); //listing the todo in the ul
    }).catch(function(err) {
        console.log(err);
    });
}

//Ajax: removing the todo that had its "X" clicked
function removeTodo(parent) {
    var clickedID = parent.data("id"); //retrieving stored id (jQuery)
    var deleteURL = "api/todos/"+clickedID;
    $.ajax({
        method: "DELETE",
        url: deleteURL
    }).then(function(data) {
        parent.remove(); //removing if the request got through
    }).catch(function(err) {
        console.log(err);
    });
}

//Ajax: updating the status and class of the todo that was clicked on
function updateTodo(todo) {
    var clickedID = todo.data("id");
    var updateURL = "api/todos/"+clickedID;
    var isDone = todo.data("done");
    var upData = {completed: !isDone}; //storing the changes in a variable
    $.ajax({
        method: "PUT",
        url: updateURL,
        data: upData
    })
    .then(function(updated) {
        todo.toggleClass("done"); //updating the class (crossing out todo)
        todo.data("done", !isDone); //updating the stored data to reflect the change
    })
    .catch(function(err) {
        console.log(err);
    })
}