'use strict';

var getJson = require('./getMoodContent.js');

var positiveEmoji = ['simple_smile', 'slightly_smiling_face', 'smile', 'stuck_out_tongue', 'sunglasses', 'ok_woman',
  'laughing', 'joy', 'laughing'];
var negativeEmoji = ['disappointed', 'fu', 'grimacing', 'face_with_rolling_eyes'];


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


var getContentFromSlackChannel = function (messages) {
  var feelingGood = 0;
  var feelingBad = 0;
  for (var i = 0; i < messages.length; i++) {
    var str = messages[i].text;
    // does it say something positive?
    feelingGood = feelingGood + containsPositive(str);
    feelingBad = feelingBad + containsNegative(str);
  }
  console.log('how feeling :: good ' + feelingGood + '   bad ' + feelingBad);

  return feelingGood > feelingBad;
}

module.exports = {
  howAreWeFeeling : function () {
    getJson.getMoodyContent(getContentFromSlackChannel);
  }
}

