var five = require("johnny-five");
var board = new five.Board();

// note not currently working

board.on("ready", function() {

  var note = 440;
  var pause = 100;

//  var strobe = new five.Pin(13);
//  var state = 0x00;

//  this.loop(500, function() {
//    for (var i=0; i<3; i++){
//      data(pin, note, 100);
//      //noTone(pin);
//    }
//
//  });

  var strobe = new five.Pin(12);
  var state = 0x00;

  this.loop(500, function() {
    strobe.write(state ^= 0x01);
  });
});
