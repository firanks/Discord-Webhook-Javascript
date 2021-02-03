const secrets = require('./text.json');

const webhook = require("webhook-discord");
 
const Hook = new webhook.Webhook("");
 
console.log("Sending HTTPS Packet...");

const msg = new webhook.MessageBuilder()
                .setName("Javascript")
                .setText(secrets.Message);
Hook.send(msg);
