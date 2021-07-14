const participants = require('./participants.js');

//Team Thursday Fortnite Config
const DEFAULT_PARTICIPANT = process.env.PARTICIPANT_DEFAULT;

//Determine which twitch account / channel this bot will connect to.
//If the node app is launched with a channel argument, that takes first precedence.
//Else, if the PARTICIPANT_DEFAULT environment variable is set, then that takes precedence.
const DEFAULT_CHANNEL = participants[DEFAULT_PARTICIPANT].twitchtv;
const CHANNEL = process.argv[2] || DEFAULT_CHANNEL;

module.exports = { CHANNEL };