var five = require("johnny-five"),
  board = new five.Board();

board.on("ready", function() {
  var leftMotor;
  var rightMotor;


  leftMotor = new five.Motor({
    pins: {
      pwm: 9,
      dir: 8,
      enable: 7
    },
    invertPWM: true
  });

  rightMotor = new five.Motor({
    pins: {
      pwm: 5,
      dir: 4,
      enable: 2
    },
    invertPWM: true
  });

  board.repl.inject({
    leftMotor: leftMotor,
    rightMotor: rightMotor
  });

  leftMotor.on("stop", function() {
    console.log("automated stop on timer", Date.now());
  });

  leftMotor.on("forward", function() {
    console.log("forward", Date.now());

    // enable the motor after 2 seconds
    board.wait(2000, function() {
      leftMotor.enable();
    });
  });

  leftMotor.on("enable", function() {
    console.log("motor enabled", Date.now());

    // enable the motor after 2 seconds
    board.wait(2000, function() {
      leftMotor.stop();
    });
  });

  leftMotor.on("disable", function() {
    console.log("motor disabled", Date.now());
  });


  rightMotor.on("stop", function() {
    console.log("automated stop on timer", Date.now());
  });

  rightMotor.on("forward", function() {
    console.log("forward", Date.now());

    // enable the motor after 2 seconds
    board.wait(2000, function() {
      rightMotor.enable();
    });
  });

  rightMotor.on("enable", function() {
    console.log("motor enabled", Date.now());

    // enable the motor after 2 seconds
    board.wait(2000, function() {
      rightMotor.stop();
    });
  });

  rightMotor.on("disable", function() {
    console.log("motor disabled", Date.now());
  });


  // disable the motor
  leftMotor.disable();
  rightMotor.disable();

  // set the motor going forward full speed (nothing happen)
  leftMotor.forward(255);
  rightMotor.forward(255);
});
