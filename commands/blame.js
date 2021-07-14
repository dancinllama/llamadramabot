const config = require('../config.js');
const { writeStats } = require('./stats.js');

const help = '!blame determines who\'s to blame for such a horrid decision.';

const response = (client, username, suggestedSpot, stats) => {
    stats.blames++;
    client.say(config.CHANNEL,`@${username}, Hi!  After crunching the numbers and doing a lot of really hard math - it looks like Reid was to blame.  He has been blamed ${blames} time(s).  This vote has no cooldown.`);
    writeStats(stats);
}

const aliases = ['reid','blamereid'];

module.exports = { response, help, aliases };