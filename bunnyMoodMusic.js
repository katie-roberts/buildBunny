var five = require("johnny-five");
var songs = require('j5-songs');
var board = new five.Board();

var howHappy = require('./slackIntegration/calculateMood').howHappy;

board.on("ready", function() {
    var piezo = new five.Piezo(9);
    var happySong = songs.load('mario-intro');
    var sadSong = songs.load('funeral-march-short');
    var happyPercentage = -1;

    this.repl.inject({
        piezo: piezo
    });

    var playMoodSong = function (newHappyPercentage) {
        console.log('newHappyPercentage: ', newHappyPercentage);
        if (newHappyPercentage !== happyPercentage){
            happyPercentage = newHappyPercentage;

            if (happyPercentage > 50) {
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
    }

    // Load a song object
    setInterval(
        function() {
            howHappy(playMoodSong);
        },
        5*1000
    );

    howHappy(playMoodSong);
});
