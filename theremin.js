var five = require("johnny-five");
var board = new five.Board();
board.on("ready", function() {
    var piezo = new five.Piezo(9);
    this.repl.inject({
        piezo: piezo
    });

    sensor = new five.Sensor({
        pin: "A0",
        freq: 250
    });



    sensor.on("data", function() {

        var thisPitch = Math.floor(map(this.value, 960, 995, 0, 7));

        if (thisPitch < 0) {
            thisPitch = 0;
        }
        if (thisPitch > 7) {
            thisPitch = 7;
        }

        var frequencies = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25];

        thisPitch = frequencies[thisPitch];
        piezo.frequency(thisPitch, 100);

    });



    // piezo.play({
    //   song: "F# F# G A A G F# E D D E f# F# e e   ",
    //   beats: 1/3,
    //   tempo: 50
    // });
});

function map(sensorVal, inMin, inMax, outMin, outMax) {
    return (sensorVal - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
