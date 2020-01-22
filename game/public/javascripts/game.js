

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
        if (c1 < 6) {
            for (var j = 6; j > 0; j--) {
                co = j + "." + c2;
                if (this.gameState[co] != "blue" && this.gameState[co] != "red") {
                    var temp = j;
                    j = 0;
                    console.log(co)
                }
            }
        }
        if (this.player == 2) {
            this.gameState[co] = "red";
        }
        this.gameState[co] = "blue";
        if (this.gameWon(temp, c2, co, "blue")) {
            console.log("game over");
        }
        else {
            console.log("game ongoing")
        }
    };

    getCoordinates(i, a) {
        var c = i + 1;
        if (this.isAvailable(c, a) && (c != 7)) {
            return this.getCoordinates(c, a);
        }
        return [i, a];
    }

    setPlayer(player) {
        this.player = player;
    }

    isAvailable(i, a) {
        if ((i < 7) && (i >= 1) && (a < 8) && (a >= 1)) {
            // return ((this.document.getElementById(i + "." + a).style.backgroundColor == "") || (this.document.getElementById(i + "." + a).style.backgroundColor == "gray"));
            var co = i + "." + a;
            if (this.gameState[co] != "blue" && this.gameState[co] != "red") {
                return true;
            }
            return false;
        }
        return false;
    }

    takenBy(i, a, color) {
        if ((i < 7) && (i >= 1) && (a < 8) && (a >= 1)) {
            // return (this.document.getElementById(i + "." + a).style.backgroundColor == color);
            var co = i + "." + a;
            if (gameState[co] == color) {
                return true;
            }
        }
        return false;
    }

    gameWon(i, a, co, color) {
        if(this.Vertical(i, a, co, color)){
            return true;
        }
        if(this.HorizontalRight(i, a, co, color)) {
            return true;
        }
        if(this.HorizontalLeft(i, a, co, color)) {
            return true;
        }
        if (this.DiagonalULeft(i, a, co, color)) {
            return true;
        }
        if(this.DiagonalURight(i, a, co, color)) {
            return true;
        }
        if(this.DiagonalDLeft(i, a, co, color)) {
            return true;
        }
        if(this.DiagonalDRight(i, a, co, color)) {
            return true;
        }
        return false;
    }

    Vertical(i, a, co, color) {
        var count = 0;
        if (i < 4) {
            for (var j = i; i < 7; i++) {
                co = j + "." + a;
                if (this.gameState[co] != color) {
                    j = 7;
                }
                count++;
            }
            console.log("vertical " + count);
            if (count >= this.tWin) {

                return true;
            }
        }
        return false;
    }

    HorizontalRight(i, a, co, color) {
        var count = -1;
        if (a > 3) {
            for (var k = a; k > 0; k--) {
                co = i + "." + k;
                if (this.gameState[co] != color) {
                    k = 0;
                }
                count++;
            }
            console.log("to the right " + count);
            if (count >= this.tWin) {
                return true;
            }
        }
        return false;
    }

    HorizontalLeft(i, a, co, color) {
        if (a < 5) {
            var count = -1;
            for (var l = a; l < 8; l++) {
                co = i + "." + l;
                if (this.gameState[co] != color) {
                    l = 8;
                }
                count++;
            }
            console.log("to the left " + count);
            if (count >= this.tWin) {
                return true;
            }
        }
        return false;
    }

    DiagonalULeft(i, a, co, color) {
        if (a < 5) {
            var count = 0;
            var y = i;
            var x = a;
            while(x < 8 && y > 0) {
                y--;
                x++;
                co = y + "." + x;
                if(this.gameState[co] != color) {
                    x = 8;
                }
                count++;
            }
            console.log(co + " " + count); 
            if(count >= this.tWin) {
                return true;
            }
        }
        return false;
    }

    DiagonalURight(i, a, co, color) {
        if (a > 3) {
            var count = 0;
            var y = i;
            var x = a;
            while(x > 0 && y > 0) {
                y--;
                x--;
                co = y + "." + x;
                if(this.gameState[co] != color) {
                    x = 0;
                }
                count++;
            }
            console.log(co + " " + count); 
            if(count >= this.tWin) {
                return true;
            }
        }
        return false;
    }

    DiagonalDLeft(i, a, co, color) {
        if (a < 5 && i < 4) {
            var count = 0;
            var y = i;
            var x = a;
            while(x < 8 && y < 7) {
                y++;
                x++;
                co = y + "." + x;
                if(this.gameState[co] != color) {
                    x = 8;
                }
                count++;
            }
            console.log(co + " " + count); 
            if(count >= this.tWin) {
                return true;
            }
        }
        return false;  
    }

    DiagonalDRight(i, a, co, color) {
        if (a > 3 && i < 4) {
            var count = 0;
            var y = i;
            var x = a;
            while(x > 0 && y < 7) {
                y++;
                x--;
                co = y + "." + x;
                if(this.gameState[co] != color) {
                    x = 0;
                }
                count++;
            }
            console.log(co + " " + count); 
            if(count >= this.tWin) {
                return true;
            }
        }
        return false;
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