var five = require('johnny-five');

var board = new five.Board();

board.on('ready', function () {
//  var motor = new five.Motor({
//    pin: 6
//  });
//
//  this.repl.inject({
//    motor: motor
//  });

  var servo = new five.Servo({
    pin: 6
  });

  this.repl.inject({
    servo: servo
  });
});