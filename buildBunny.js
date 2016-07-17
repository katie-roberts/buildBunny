// On off button
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function () {

  var button = new five.Button(9);
  var scroll = new five.Sensor("A0");
  var led = new five.Led(11);


//  button.on('press', function(){
//    console.log('button pressed');
//    led.on();
//  });
//
//  button.on('release', function(){
//    console.log('button released');
//    led.off();
//  });

  scroll.scale(0, 255).on('change', function () {
    console.log('The scaled potentiometer value is ', this.value);
    console.log('The raw value ', this.raw);
    led.brightness(this.value);
  });

});

