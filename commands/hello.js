const config = require('../config.js');

const help = '!hello display a simple hello / welcome message.';

const response = (client, username, suggestedSpot, stats) => {
    client.say(config.CHANNEL,`@${username}, Hi!  Thanks for joining the game.  My name is ${process.env.TWITCH_BOT_USERNAME}.  Try !help to see my commands.`);
}

const aliases = ['hi','greetings'];

module.exports = { response, help, aliases };