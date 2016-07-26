var five = require('johnny-five');
var board = new five.Board();

var areWeHappy = require('./slackIntegration/calculateMood').areWeHappy;
var moody = false;


board.on('ready', function () {
//
//  var button = new five.Button('A1');
//  var scroll = new five.Sensor('A0');

  var happiness = false;

  var glasgowMood = new five.Led(10);
  var teamMood = new five.Led(12);
  var salfordMood = new five.Led(11);

  var leftEar;
  var rightEar;

  var randomisedLeftEar = function () {
    // left ear
    if (leftEar.isOn) {
      if (leftEar.direction.name === 'forward') {
        leftEar.reverse(255);
      } else {
        leftEar.forward(255);
      }
      setTimeout(randomisedLeftEar, Math.floor(Math.random() * 10000));
    }
  }

  var randomisedRightEar = function () {
    // left ear
    if (rightEar.isOn) {
      if (rightEar.direction.name === 'forward') {
        rightEar.reverse(255);
      } else {
        rightEar.forward(255);
      }
      setTimeout(randomisedRightEar, Math.floor(Math.random() * 10000));
    }
  }


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
    salfordMood: salfordMood,
    glasgowMood: glasgowMood,
    teamMood: teamMood,
    leftEar: leftEar,
    rightEar: rightEar
  });


  leftEar.on('stop', function () {
  });

  leftEar.on('forward', function () {
    // enable the motor after 2 seconds
    board.wait(2000, function () {
      leftEar.enable();
    });
  });


  leftEar.on('enable', function () {
    // enable the motor after 2 seconds
    board.wait(2000, function () {
      leftEar.stop();
    });
  });

  leftEar.on('disable', function () {
  });


  rightEar.on('stop', function () {
  });

  rightEar.on('forward', function () {

    // enable the motor after 2 seconds
    board.wait(2000, function () {
      rightEar.enable();
    });
  });

  rightEar.on('enable', function () {

    // enable the motor after 2 seconds
    board.wait(2000, function () {
      rightEar.stop();
    });
  });

  rightEar.on('disable', function () {
  });


  // disable the motor
  leftEar.disable();
  rightEar.disable();

  // set the motor going forward full speed
  leftEar.forward(255);
  rightEar.forward(255);

  setTimeout(randomisedLeftEar, Math.floor(Math.random() * 10000));
  setTimeout(randomisedRightEar, Math.floor(Math.random() * 10000));

//  console.log('am I happy ?? ' + happy.areWeHappy);

  var checkingHappiness = function (happy) {

    if (happy) {
      if (moody) {
        salfordMood.stop();
        glasgowMood.stop();
        teamMood.stop();
        moody = false;
      }
      salfordMood.on();
      glasgowMood.on();
      teamMood.on();
      leftEar.forward(255);
      rightEar.forward(255);
    } else {
      salfordMood.blink(500);
      glasgowMood.blink(500);
      teamMood.blink(500);
      leftEar.stop();
      rightEar.stop();
      moody = true;
    }
    setTimeout(areWeHappy(checkingHappiness), 10000);
  }
//
  areWeHappy(checkingHappiness);

});

