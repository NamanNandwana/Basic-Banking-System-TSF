const express = require("express");

const app = express();


app.get("/", function (req, res){
    res.sendFile(__dirname + "/" + "index.html");
});

app.get("/customers.html", function (req, res){
    res.sendFile(__dirname + "/" + "customers.html");
});

app.listen (3000, function(){
    console.log("Server started on port 3000");
});
