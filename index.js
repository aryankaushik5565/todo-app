
var express = require('express')
var app = express()
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

var task = ["buy socks", "practice with nodejs"];
var complete = []; 

app.get("/", function(req, res) {
    res.render("index", { task: task, complete: complete });
});

app.listen(3000, function() {
    console.log("example code running on port 3000!")
});

app.set('view engine', 'ejs');

app.post('/addtask', function(req, res) {
    var newTask = req.body.newtask;
    task.push(newTask);
    res.redirect("/");
});
app.post("/removetask", function(req, res) {
    var completeTask = req.body.check;

if (typeof completeTask === "string") {
    complete.push(completeTask);
    task.splice(task.indexOf(completeTask), 1);
} else if (typeof completeTask === "object") {
   for (var i = 0; i < completeTask.length; i++) {complete.push(completeTask[i]);
   task.splice(task.indexOf(completeTask[i]), 1);
}
}
  res.redirect("/");
});
