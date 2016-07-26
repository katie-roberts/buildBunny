// On off button
var five = require('johnny-five');
var board = new five.Board();

var overallMood = require('./overallmood.js')

board.on('ready', function () {

  var button = new five.Button('A1');
  var scroll = new five.Sensor('A0');
  var glasgowMood = new five.Led(10);
  var teamMood = new five.Led(12);
  var salfordMood = new five.Led(11);

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
    salfordMood: salfordMood,
    glasgowMood: glasgowMood,
    teamMood: teamMood,
    leftEar: leftEar,
    rightEar: rightEar
  });


  button.on('press', function(){
    console.log('button pressed');

//   redLed.on();
  });

  button.on('release', function(){
    console.log('button released');
//   redLed.off();
  });

  scroll.scale(0, 255).on('change', function () {
   // console.log('The scaled potentiometer value is ', this.value);
 //   console.log('The raw value ', this.raw);
   // redLed.brightness(this.value);
   // amberLed.brightness(this.value);
  });


  leftEar.on('stop', function() {
    console.log('automated stop on timer', Date.now());
  });

  leftEar.on('forward', function() {
    console.log('forward', Date.now());

    // enable the motor after 2 seconds
    board.wait(2000, function() {
      leftEar.enable();
    });
  });

  leftEar.on('enable', function() {
    console.log('motor enabled', Date.now());

    // enable the motor after 2 seconds
    board.wait(2000, function() {
      leftEar.stop();
    });
  });

  leftEar.on('disable', function() {
    console.log('motor disabled', Date.now());
  });


  rightEar.on('stop', function() {
    console.log('automated stop on timer', Date.now());
  });

  rightEar.on('forward', function() {
    console.log('forward', Date.now());

    // enable the motor after 2 seconds
    board.wait(2000, function() {
      rightEar.enable();
    });
  });

  rightEar.on('enable', function() {
    console.log('motor enabled', Date.now());

    // enable the motor after 2 seconds
    board.wait(2000, function() {
      rightEar.stop();
    });
  });

  rightEar.on('disable', function() {
    console.log('motor disabled', Date.now());
  });


  // disable the motor
  leftEar.disable();
  rightEar.disable();

  // set the motor going forward full speed (nothing happen)
  leftEar.forward(255);
  rightEar.forward(255);

});

