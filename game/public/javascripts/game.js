

class Game {

    constructor() {
      this.blue = true;
      this.player = 1;
      this.colored = [];
      this.gameState = {};
      // this.temp = [];
      this.tWin = 4;
      this.moveAcc = false;
      this.id = Math.random();
    };
  
    func2(as) {
      console.log(as);
      console.log(as.textContent);
    };

    getGameState() {
        return this.gameState; //{"2.1": "red", "3.2": "blue"}
    }
  
    changePlayer() {
        console.log("change player")
      if ((this.player == 1) && (this.moveAcc)) {
        this.player = 2;
        // this.document.getElementById("a").innerHTML = this.showPlayer();
        this.changeRootColor("red");
        this.moveAcc = false;
      }
      else if (this.player == 0) {
        // this.document.getElementById("a").innerHTML = "Please reset the game before changing players.";
      }
      else if (!this.moveAcc) {
        // this.document.getElementById("a").innerHTML = "Please let the current this.player make a move before changing players.";
      }
      else {
        this.player = 1;
        // this.document.getElementById("a").innerHTML = this.showPlayer();
        this.changeRootColor("blue");
        this.moveAcc = false;
      }
    };
  
    clickIt(i, a) {
        console.log("clickIt")

      var coordinates = "0.0";
    // var el = this.document.getElementById(i + "." + a);
      coordinates = this.getCoordinates(i, a);
  
      var c1 = coordinates[0];
      var c2 = coordinates[1];
      var co = c1 + "." + c2;
      console.log("test " + co);
      if(c1 < 6) {
          for(var i = 6;i > 0;i--) {
              co = i + "." + c2;
              if(this.gameState[co] != "blue") {
                  i = 0;
                  console.log(co)
              } 
          }
      }
      this.gameState[co] = "blue";
    
    };
  
    getCoordinates(i, a) {
      var c = i + 1;
      if (this.isAvailable(c, a) && (c != 7)) {
        return this.getCoordinates(c, a);
      }
      console.log(i + " " + a);
      return [i, a];
    }

    setPlayer(player) {
        this.player = player; 
    }
  
    isAvailable(i, a) {
      if ((i < 7) && (i >= 1) && (a < 8) && (a >= 1)) {
        // return ((this.document.getElementById(i + "." + a).style.backgroundColor == "") || (this.document.getElementById(i + "." + a).style.backgroundColor == "gray"));
        var co = i + "." + a;
        if(this.gameState[co] != "blue" && this.gameState[co] != "red"){
            return true;
        }
        return false;
      }
      return false;
    }
  
    takenBy(i, a, color) {
      if ((i < 7) && (i >= 1) && (a < 8) && (a >= 1)) {
        // return (this.document.getElementById(i + "." + a).style.backgroundColor == color);
      }
      return false;
    }
  
    gameWon(i, a, color, num) {
      if ((this.takenBy(i, a - 1, color)) || (this.takenBy(i, a + 1, color))) {
        if (this.horDir(i, a, color, num) >= this.tWin) {
          return true;
        }
      }
      if ((this.takenBy(i - 1, a, color)) || (this.takenBy(i + 1, a, color))) {
        if (this.verDir(i, a, color, num) >= this.tWin) {
          return true;
        }
      }
      if ((this.takenBy(i - 1, a - 1, color)) || (this.takenBy(i + 1, a + 1, color))) {
        if (this.rightDiaDir(i, a, color, num) >= this.tWin) {
          return true;
        }
      }
      if ((this.takenBy(i + 1, a - 1, color)) || (this.takenBy(i - 1, a + 1, color))) {
        console.log("test");
        if (this.leftDiaDir(i, a, color, num) >= this.tWin) {
          return true;
        }
      }
  
      return false;
    }
  
    horDir(i, a, color, num) {
      while (this.takenBy(i, a - 1, color)) {
        a -= 1;
      }
      while (this.takenBy(i, a + 1, color)) {
        num += 1;
        a += 1;
      }
      console.log(num);
      return num;
    }
  
    verDir(i, a, color, num) {
      while (this.takenBy(i - 1, a, color)) {
        i -= 1;
      }
      while (this.takenBy(i + 1, a, color)) {
        num += 1;
        i += 1;
      }
      return num;
    }
  
    rightDiaDir(i, a, color, num) {
      while (this.takenBy(i - 1, a - 1, color)) {
        a -= 1;
        i -= 1;
      }
      while (this.takenBy(i + 1, a + 1, color)) {
        num += 1;
        i += 1;
        a += 1;
      }
      return num;
    }
  
    leftDiaDir(i, a, color, num) {
      while (this.takenBy(i + 1, a - 1, color)) {
        a -= 1;
        i += 1;
      }
      while (this.takenBy(i - 1, a + 1, color)) {
        num += 1;
        i -= 1;
        a += 1;
        console.log(a + " " + i);
      }
      return num;
    }
  
    showPlayer() {
      if (this.player == 1) {
        return "It is currently the blue players turn.";
      }
      return "It is currently the red players turn.";
    };
  
    newGame() {
      this.changeRootColor("blue");
      this.blue = true;
      this.player = 1;
      this.colored = [];
      this.tWin = 4;
      this.moveAcc = false;
    //   this.document.getElementById("a").innerHTML = this.showPlayer();
    //   this.document.getElementById("c" + this.tWin).style.boxShadow = "0px 1px 2px 0px rgba(0, 0, 0, 0.5)";
    };
  
    reset(i) {
    //   this.document.getElementById("c" + this.tWin).style.boxShadow = "0px 1px 4px 2px rgba(0, 0, 0, 0.5)";
      this.tWin = i;
    //   this.document.getElementById("c" + this.tWin).style.boxShadow = "0px 1px 2px 0px rgba(0, 0, 0, 0.5)";
    //   this.document.getElementById("c").innerHTML = "Connect-" + this.tWin;
      for (var a = 0; a < this.colored.length; a++) {
        var co = this.colored[a];
        // this.document.getElementById(co).style.backgroundColor = "gray";
        this.player = 1;
        // this.document.getElementById("a").innerHTML = this.showPlayer();
        // this.document.getElementById("winner").innerHTML = "";
        this.blue = true;
        this.changeRootColor("blue");
      }
    };
  
    changeRootColor(color) {
    //   var root = this.document.documentElement;
      var newColor = "rgba(255, 0, 0, 0.3)";
      if (color == "blue") {
        newColor = "rgba(0, 0, 255, 0.1)";
      }
    //   root.style.setProperty('--colorVar', newColor);
    };
  
    // function toWinFunc(i) {
    //   this.document.getElementById("c"+this.tWin).style.boxShadow = "0px 1px 4px 2px rgba(0, 0, 0, 0.5)";
    //   this.tWin = i;
    //   this.document.getElementById("c"+this.tWin).style.boxShadow = "0px 1px 2px 0px rgba(0, 0, 0, 0.5)";
    //   this.document.getElementById("c").innerHTML = "Connect-"+ this.tWin;
    //   reset();
    // };
  
    getColor() {
      if (this.blue == true) {
        return "blue";
      }
      return "red";
    };
  };

  module.exports = {
      Game: Game
  }