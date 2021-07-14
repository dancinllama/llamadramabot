const tmi = require('tmi.js');
const commands = require('./commands');
const config = require('./config.js');
const help = require('./commands/help.js');
const { readStats, writeStats } = require('./commands/stats.js');

try{
//Handles the TMI / connecting to Twitch configuration
const client = new tmi.Client({
    connection : { reconnect : true },
    channels : ['dancinllama'], //May be able to do more than one channel
    identity : {
        username : process.env.TWITCH_BOT_USERNAME,
        password: process.env.TWITCH_BOT_AUTH_TOKEN
    }
});

const regexpCommand = new RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/);


const stats = readStats();

client.connect();

client.on('message', (channel, tags, message, self) => {

    console.log('message: ' + message);
    //Do not feed the bots!
    const isBot = tags.username.toLowerCase() === 'llamadramabot' || tags.username.toLowerCase() === 'gitsbot1000';
    if(isBot){
        return;
    }

    //Only react when someone uses ! for a command.
    if(!message || !message.startsWith('!')){
        return;
    }

    let [raw, command, argument] = message.match(regexpCommand);

    console.log('good idea? : ' + command);
    if('goodidea' === command){
        command = 'idea';
        argument = 'good';
    }else if('badidea' === command){
        command = 'idea';
        argument = 'bad';
    }

    const { response, help } = commands[command.toLowerCase()] || {};
    let responseToCall = response;
    let helpToCall = help;

    if(!response){
        let alias = commands['command_arr'].find(cmd => cmd.aliases && cmd.aliases.find(alias => alias === command.toLowerCase()));
        if(!alias){
            return;
        }
        const {response, help } = alias;
        responseToCall = response;
        helpToCall = help;
    }

    console.log('help... ' + help);
    if('help' === argument){
        client.say(channel, help);
        return;
    }

    try{
        if(typeof responseToCall === 'function'){
            responseToCall(client, tags.username, argument, stats);
            return;
        }else{
            client.say(channel, responseToCall);
        }
    }
    catch(e){
        console.log(e);
    }
});

}catch(e){
    console.log(e);
}
