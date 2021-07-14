const blame = require('./blame.js');
const donate = require('./donate.js');
const fire = require('./fire.js');
const hdead = require('./hdead.js');
const hello = require('./hello.js');
const help = require('./help.js');
const idea = require('./idea.js');
const land = require('./land.js');
const luv = require('./luv.js');
const stats = require('./stats.js');
const thank = require('./thank.js');
const woot = require('./woot.js');
const yeet = require('./yeet.js');

const command_arr = [blame, donate, fire, hdead, hello, help, idea, land, luv, stats, thank, woot, yeet];

module.exports = {
    blame,
    donate,
    fire,
    hdead,
    hello,
    help,
    idea,
    land,
    luv,
    stats,
    thank,
    woot,
    yeet,
    command_arr
};