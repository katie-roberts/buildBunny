var five = require("johnny-five");
var board = new five.Board();

// note not currently working

board.on("ready", function() {
  var mic = new five.Sensor("A0");
  var led = new five.Led(11);

  mic.on("data", function() {
    led.brightness(this.value >> 2);
  });
});
