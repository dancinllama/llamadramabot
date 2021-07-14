const participants = require('../participants.js');
const config = require('../config.js');

const help = '!donate displays the donate to Extra Life link.  use !donate, !donate all or !donate james|reid|heather|josh|skip';

const getDonationLink = (participant, displayPrefix) => {
    if(participant && participants[participant.toUpperCase()]){
        let p = participants[participant.toUpperCase()];
        let link = `https://www.extra-life.org/index.cfm?fuseaction=donordrive.participant&participantID=${p.id}`;
        let prefix = !displayPrefix ? '' : 'Please consider donating using ';
        return `${prefix}${p.friendly}'s extra-life page: ${link}`;
    }
    return undefined;
}

const response = (client, username, participant) => {
    //Handles !donate command without any arguments, setting the default participant based on env variables.
    if(!participant){
        participant = process.env.PARTICIPANT_DEFAULT;
    }

    //Gets the donation message for the given participant.  Returns undefined if none found.
    let message = getDonationLink(participant, true);

    //If chat user requested !donate all, display a list of the team's donation links.
    if(!message && !!participant && participant.toUpperCase() === 'ALL'){
        client.say(config.CHANNEL, `@${username}, Hi! Please consider donating to Extra-Life using any of the following links:`);

        //loop through the team and individually say their links over the twitch chat.
        Object.keys(participants).forEach(participantKey => {
            let msg = getDonationLink(participantKey);
            client.say(config.CHANNEL, msg);
        });
        return;
    }

    //If donate was used with a particular participant OR if using the default participant,
    //then chat their particular donation link:
    client.say(config.CHANNEL, message);
}

const aliases = ['donations','donationstats','extralife','el','ftk','forthekids'];

module.exports = { help, response, aliases };