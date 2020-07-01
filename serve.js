const express = require('express');
const path = require('path');
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.post("/login", (req, res, next) => {
  db.collection("people").findOne({ username: req.body[0] }, function (err, result) {
    if (err) {
      res.status(500).send("Error reading database.");
      return;
    }
    if(!result){
      res.send("no username");
      return;
    }
    console.log(result)
    if (result.pass == req.body[1]) {
      res.send("Logged in successfully")
      return;
    }else{
      res.send("Failed to login");
      return;
    }
  });
});

mongoose.connect('mongodb://localhost/shop', { useNewUrlParser: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  app.listen(3001);
  console.log("Server listening on port 3001");
});