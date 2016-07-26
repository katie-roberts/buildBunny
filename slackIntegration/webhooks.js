var Slack = require('slack-node');
//https://hooks.slack.com/services/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

webhookUri = "__uri___";

slack = new Slack();
slack.setWebhook(webhookUri);

slack.webhook({
  channel: "#general",
  username: "webhookbot",
  text: "This is posted to #general and comes from a bot named webhookbot."
}, function(err, response) {
  console.log(response);
});