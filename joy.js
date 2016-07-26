// Blink an LED
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

//  var led4 = new five.Led(4);
//  var led6 = new five.Led(6);
//  var led9 = new five.Led(9);
  var piezo = new five.Piezo(9);

  this.repl.inject({
    piezo: piezo

  });


  piezo.play({
    song: "F# F# G A A G F# E D D E f# F# e e   ",
    beats: 1/3,
    tempo: 50
  });

});
