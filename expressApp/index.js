var express = require("express"),
    app = express(),
    bodyParser = require('body-parser');

//Requiring the routes file
var todoRoute = require("./routes/todo");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/views"));

//Defining the GET route for the main page
app.get("/", function(req, res) {
    res.sendFile("./views/index.html");
});

//Defining a shortcut for the api route
app.use("/api/todos", todoRoute);

app.listen(process.env.PORT, function() {
    console.log("Server started on: " + process.env.PORT);
});
    