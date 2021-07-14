const config = require('../config.js');

const help = '!love shows your love for the crew.';

let todayyeets = 0;

const response = (client, username, suggestedSpot, stats) => {
    client.say(config.CHANNEL,`@Awww thanks ${username}!, We luv you too.`);
}

aliases = ['love','luv ya','love you','y\'all are awesome'];

module.exports = { response, help, aliases };