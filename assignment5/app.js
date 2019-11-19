const express = require('express');
const port = 8080
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/"+'index.html');
});

app.post('/submit', function(req, res) {
    var iname = req.body.inputName;
    var iemail = req.body.inputEmail;
    var icomment = req.body.inputComment;

    res.write("name: " + iname + "\n");
    res.write("email: " + iemail + "\n");
    res.write("name: " + icomment + "\n");
    res.end() //Used to end response. SEND file automatically closes file for you. Won't display info unless included.
});

var server = app.listen(port, function () {
    console.log('Node server is running..');
});
