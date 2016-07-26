var five = require("johnny-five");
var songs = require('j5-songs');
var board = new five.Board();

var areWeHappy = require('./slackIntegration/calculateMood').areWeHappy;

board.on("ready", function() {
    var piezo = new five.Piezo(9);
    this.repl.inject({
        piezo: piezo
    });

    sensor = new five.Sensor({
        pin: "A0",
        freq: 250
    });

    var playMoodSong = function (happy) {
        console.log('Happy?', happy);
        if (happy) {
            console.log('We are happy!');
            var happySong = songs.load('mario-intro')
            piezo.play(happySong);
        } else {
            console.log('We are sad :(');
            var sadSong = songs.load('funeral-march-short')
            piezo.play(sadSong);
        }
    }

    // Load a song object
    // setInterval(
    //     playMoodSong,
    //     10*1000
    // );

    areWeHappy(playMoodSong);
});

function map(sensorVal, inMin, inMax, outMin, outMax) {
    return (sensorVal - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
