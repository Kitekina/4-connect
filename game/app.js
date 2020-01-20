// cd C:\Users\svthv\WBT_game-dir\game
// node app.js 3000
// http://localhost:3000
// http://localhost:3000/game.html
// // http://localhost:3000/splash.html
var express = require("express");
var http = require("http");

var port = process.argv[2];
var app = express();

app.use(express.static(__dirname + "/public"));
http.createServer(app).listen(3000);

app.get('/game.html', function (req, res) {
  res.send('game.html')
});
