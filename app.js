var express = require("express");
var app = express();

app.set('view engine', 'ejs');
app.use(express.static("views"));

app.get('/', function(req, res){
    res.render("index");
});
app.get('/pagetwo', function(req, res){
    res.render("pagetwo");
});

app.listen(3000, function() {
    console.log("Running");
});