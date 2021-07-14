const config = require('../config.js');
const { writeStats } = require('./stats.js');

const help = '!woot - Use this command to recognize the crew\'s achievements or when something amazeballs happens.';

let todaywoots = 0;

const response = (client, username, suggestedSpot, stats) => {
    stats.woots++;
    todaywoots++;
    client.say(config.CHANNEL,`@${username}, Hi!  Woot added! The crew has earned ${todaywoots} woot(s) today, bringing the historical total to ${stats.woots}.  This vote has no cooldown.`);
    writeStats(stats);
}

const aliases = ['woots','sweet','victory'];

module.exports = { response, help, aliases };