var five = require("johnny-five"),
  board = new five.Board();

board.on("ready", function() {
  var leftEar;
  var rightEar;


  leftEar = new five.Motor({
    pins: {
      pwm: 9,
      dir: 8,
      enable: 7
    },
    invertPWM: true
  });

  rightEar = new five.Motor({
    pins: {
      pwm: 5,
      dir: 4,
      enable: 2
    },
    invertPWM: true
  });

  board.repl.inject({
    leftEar: leftEar,
    rightEar: rightEar
  });

  leftEar.on("stop", function() {
    console.log("automated stop on timer", Date.now());
  });

  leftEar.on("forward", function() {
    console.log("forward", Date.now());

    // enable the motor after 2 seconds
    board.wait(2000, function() {
      leftEar.enable();
    });
  });

  leftEar.on("enable", function() {
    console.log("motor enabled", Date.now());

    // enable the motor after 2 seconds
    board.wait(2000, function() {
      leftEar.stop();
    });
  });

  leftEar.on("disable", function() {
    console.log("motor disabled", Date.now());
  });


  rightEar.on("stop", function() {
    console.log("automated stop on timer", Date.now());
  });

  rightEar.on("forward", function() {
    console.log("forward", Date.now());

    // enable the motor after 2 seconds
    board.wait(2000, function() {
      rightEar.enable();
    });
  });

  rightEar.on("enable", function() {
    console.log("motor enabled", Date.now());

    // enable the motor after 2 seconds
    board.wait(2000, function() {
      rightEar.stop();
    });
  });

  rightEar.on("disable", function() {
    console.log("motor disabled", Date.now());
  });


  // disable the motor
  leftEar.disable();
  rightEar.disable();

  // set the motor going forward full speed (nothing happen)
  leftEar.forward(255);
  rightEar.forward(255);
});
