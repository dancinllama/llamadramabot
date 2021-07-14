const config = require('../config.js');

const help = '!thank reminds the crew to thank the bus driver before the round begins.';

const response = (client, username, suggestedSpot, stats) => {
    client.say(config.CHANNEL,`Crew, if you are reading this: @${username} has requested that you thank the bus driver.`);
}

const aliases = ['thanks', 'bus', 'busdriver'];

module.exports = { response, help, aliases };