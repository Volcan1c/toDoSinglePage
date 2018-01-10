var express = require("express"),
    app = express(),
    bodyParser = require('body-parser');
    
var todoRoute = require("./routes/todo");
   
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 
app.get("/", function(req, res) {
    res.send("Hello babi!");
});

app.use("/api/todos", todoRoute);

app.listen(process.env.PORT, function() {
    console.log("Server started on: " + process.env.PORT);
});
    