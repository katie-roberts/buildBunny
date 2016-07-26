var five = require("johnny-five");
var songs = require('j5-songs');
var board = new five.Board();

var areWeHappy = require('./slackIntegration/calculateMood').areWeHappy;

board.on("ready", function() {
    var piezo = new five.Piezo(9);
    var happySong = songs.load('mario-intro');
    var sadSong = songs.load('funeral-march-short');

    this.repl.inject({
        piezo: piezo
    });

    var playMoodSong = function (happy) {
        if (happy) {
            var happySongClone = JSON.parse(JSON.stringify(happySong));
            console.log('We are happy!');
            piezo.play(happySong);
            happySong = happySongClone;
        } else {
            var sadSongClone = JSON.parse(JSON.stringify(sadSong));
            console.log('We are sad :(');
            piezo.play(sadSong);
            sadSong = sadSongClone;
        }
    }

    // Load a song object
    setInterval(
        function() {
            areWeHappy(playMoodSong);
        },
        30*1000
    );

    areWeHappy(playMoodSong);
});
