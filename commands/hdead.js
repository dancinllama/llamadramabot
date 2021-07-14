const config = require('../config.js');
const { writeStats } = require('./stats.js');

const help = '!hdead reports to the stream that there was, in fact, a heather death.';

let todayheatherdeaths = 0;

const response = (client, username, participant, stats) => {
    stats.heatherdeaths++;
    todayheatherdeaths++;
    client.say(config.CHANNEL, `@${username}, Hi! Thank you for reporting another heather level death.  There have been ${todayheatherdeaths} so far today, with a historical total of ${stats.heatherdeaths} overall.`);
    writeStats(stats);
}

const aliases = ['hdeath','ded','dead','death','heather','rip'];

module.exports = { response, help, aliases };
