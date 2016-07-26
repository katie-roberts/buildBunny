'use strict';

var getJson = require('./getMoodContent.js');

var positiveEmoji = ['simple_smile', 'slightly_smiling_face', 'smile', 'stuck_out_tongue', 'sunglasses', 'ok_woman',
  'laughing', 'joy', 'laughing'];
var negativeEmoji = ['disappointed', 'fu', 'grimacing', 'face_with_rolling_eyes'];

var maxNumberOfSlacksToCheck = 100;


var containsPositive = function (str) {
  var howHappy = 0;
  for (var i = 0; i < positiveEmoji.length; i++) {
    if (str.indexOf(positiveEmoji[i]) > -1) {
      howHappy++;
    }
  }

  return howHappy;
}

var containsNegative = function (str) {
  var howSad = 0;
  for (var i = 0; i < negativeEmoji.length; i++) {
    if (str.indexOf(negativeEmoji[i]) > -1) {
      howSad++;
    }
  }
  return howSad;
}


var getContentFromSlackChannel = function (messages, callback) {
  var feelingGood = 0;
  var feelingBad = 0;

  var maxMessages = messages.length < maxNumberOfSlacksToCheck ? messages.length : maxNumberOfSlacksToCheck;

  for (var i = 0; i < maxMessages; i++) {
    var str = messages[i].text;
    // does it say something positive?
    feelingGood = feelingGood + containsPositive(str);
    feelingBad = feelingBad + containsNegative(str);
  }

  if (callback) {
    callback(feelingGood > feelingBad);
  }
}

var getHappinessPercentage = function (messages, callback) {
  var feelingGood = 0;
  var feelingBad = 0;

  var maxMessages = messages.length < maxNumberOfSlacksToCheck ? messages.length : maxNumberOfSlacksToCheck;

  for (var i = 0; i < maxMessages; i++) {
    var str = messages[i].text;
    // does it say something positive?
    feelingGood = feelingGood + containsPositive(str);
    feelingBad = feelingBad + containsNegative(str);
  }

  if (callback) {
    callback( (feelingGood / (feelingGood + feelingBad)) * 100);
  }
}

module.exports = {
  areWeHappy: function (cb) {
    return getJson.getMoodyContent(getContentFromSlackChannel, cb);
  },
  howHappy: function (cb) {
    return getJson.getMoodyContent(getHappinessPercentage, cb);
  }
}
