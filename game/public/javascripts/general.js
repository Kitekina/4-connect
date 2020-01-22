
var currentPlayer = 1;

function clickIt(i, a) {
  // game.clickIt(i, a)
  var params = 'player=' + currentPlayer + '&x=' + i + '&y=' + a;
  var path = "click"
  var url = path + '?' + params;

  var xmlhttp=new XMLHttpRequest();
  xmlhttp.open("POST",url, true);
  xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  xmlhttp.onreadystatechange = function() {//callback when the state changes.
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      //todo update view!
      console.log(xmlhttp.responseText);
      //parse response:
      var obj = JSON.parse(xmlhttp.responseText);
      updateGameState(obj)
    }
}

  xmlhttp.send();

  this.console.log("click it")
}

function updateGameState(gameState) {
  for(var key in gameState) {
    var value = gameState[key];
    console.log("key:"+key+" value:" + value)
    this.document.getElementById(key).style.backgroundColor = value;
  }

};

function updateView(i, a) {
  console.log("clickIt")

// var coordinates = "0.0";
// var el = this.document.getElementById(i + "." + a);
// coordinates = this.getCoordinates(i, a);

// var c1 = coordinates[0];
// var c2 = coordinates[1];
// var co = c1 + "." + c2;
// console.log("test " + co);
// if (this.blue && (1 == this.player) && this.isAvailable(i, a)) {
//   this.document.getElementById(co).style.backgroundColor = "blue";
//   this.colored.push(co);
//   this.blue = false;
//   this.moveAcc = true;
//   if (this.gameWon(c1, c2, "blue", 1)) {
//     this.document.getElementById("winner").innerHTML = "Blue is the winner!";
//     this.newGame();
//   }
// }
// else if (!this.blue && (2 == this.player) && this.isAvailable(i, a)) {
//   this.document.getElementById(co).style.backgroundColor = "red";
//   this.colored.push(co);
//   this.blue = true;
//   this.moveAcc = true;
//   if (this.gameWon(c1, c2, "red", 1)) {
//     this.document.getElementById("winner").innerHTML = "Red is the winner!";
//     this.newGame();
//   }
// }
};

function changePlayer() {
  // game.changePlayer()
  this.console.log("yo")
}

function reset(i) {
  // game.reset(i)
}

window.onload = function () {
  // //cooler multiplayer mode!
  // game.document = this.document
  // // game.changeRootColor("blue");
  // // game.blue = true;
  // // game.player = 1;
  // // game.colored = [];
  // // game.tWin = 4;
  // game.moveAcc = false;
  // this.document.getElementById("a").innerHTML = game.showPlayer();
  // this.console.log(game.id)
  // this.console.log(game.showPlayer())
  // this.document.getElementById("c" + game.tWin).style.boxShadow = "0px 1px 2px 0px rgba(0, 0, 0, 0.5)";
};