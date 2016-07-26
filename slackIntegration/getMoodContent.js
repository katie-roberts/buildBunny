var request = require('request');

var url = 'https://slack.com/api/channels.history';
var token = 'notuploadingtokens!';
var channelId = 'C1URGHYUW';


module.exports = {


  getMoodyContent: function (callback) {
    var constructedUrl = url + '?token=' + token + '&channel=' + channelId;

    request(constructedUrl, function (error, response, body) {
      //Check for error
      if (error) {
        return console.log('Error:', error);
      }

      //Check for right status code
      if (response.statusCode !== 200) {
        return console.log('Invalid Status Code Returned:', response.statusCode);
      }


      var slackResponse = JSON.parse(body);
      //console.log("Got a response: ", slackResponse.messages);
      callback(slackResponse.messages);

    });
  }
};
