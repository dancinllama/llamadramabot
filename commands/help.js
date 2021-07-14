const commands = require('../commands');
const config = require('../config.js');

const help = 'Lists the bot commands.  For help with specific commands, type !<command> help.  For instance: !donate help or !stats help';

const response = (client, username, participant) => {
    let commandStr = '!badidea !blame !donate !fire !goodidea !hello !help !idea !land !stats !quote !woot !yeet';
    /*Object.keys(commands).forEach(commandKey => {
        console.log('commandKey: ' + commandKey);
        if(commandStr){
            commandStr = ` !${commandKey}` ;
        }else{
            commandStr = commandKey;
        }
    });*/
    client.say(config.CHANNEL,`Hi ${username}, I am your friendly ${process.env.TWITCH_BOT_USERNAME}.  Please  use any of the following commands to interact with me ${commandStr}.  You can also use !<command> help to find out more about each command.`);
}

module.exports = { response, help};