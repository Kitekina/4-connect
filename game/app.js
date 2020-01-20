// cd C:\Users\svthv\WBT_game-dir\game
// node app.js 3000
// http://localhost:3000
// http://localhost:3000/game.html
// // http://localhost:3000/splash.html
let gameModule = require("./public/javascripts/game.js");
var express = require("express");
var http = require("http");

const ejs = require("ejs");

var port = process.argv[2];
var app = express();
let game = new gameModule.Game();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

http.createServer(app).listen(3000);

app.get('/game.html', function (req, res) {
  res.render('game.html', {game: game})
});

app.get('/game', function (req, res) {
  res.render('game', {game: game})
});
