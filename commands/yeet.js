const config = require('../config.js');
const { writeStats } = require('./stats.js');

const help = '!yeet alerts the stream about a yeeting.';

let todayyeets = 0;

const response = (client, username, suggestedSpot, stats) => {
    stats.yeets++;
    todayyeets++;
    client.say(config.CHANNEL,`@${username}, Hi! Yeet added! As a crew, we have yeeted ${todayyeets} player(s) so far today, bringing the total historical yeetage to ${stats.yeets}. Most of those yeets have come from Reid.`);
    writeStats(stats);
}

aliases = ['yeets','kapow'];

module.exports = { response, help, aliases };