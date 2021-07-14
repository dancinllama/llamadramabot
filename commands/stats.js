const extraLife = require('extra-life');
const fs = require('fs');

let extraLifeCooldown = false;

const help = '!stats displays the donation stats from Extra Life. Use !stats for team based stats or !stats <participant name> for individual stats';

const response = (client, username, participant) => {
    console.log('in stats');
    if(!extraLifeCooldown){
        extraLifeCooldown = true;
        setTimeout(() => { extraLifeCooldown = false; }, 7500);
        if(participant){
            let p = PARTICIPANTS[participant.toUpperCase()];
            console.log('getting individual participant data: ' + p.id);
            extraLife.getParticipantActivity(p.id).then(result => {
                console.log('participant data: ' + result);
            })
            .catch(error => {
                console.log(error);
            });
        }else{
            console.log('getting team data: ' + process.env.PARTICIPANT_ID_FRAGFORCE);
            extraLife.getTeamParticipants(process.env.PARTICIPANT_ID_FRAGFORCE).then(result => {
                console.log('team data : ' + result);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }else{
        console.log('Please wait a few minutes before using the stats command again.');
    }
}

const readStats = () => {
    if (fs.existsSync('.stats')){
        var stats = fs.readFileSync('.stats');
        return JSON.parse(stats);
    }
    return undefined;
}

const writeStats = (stats) => {
    fs.writeFile(".stats", JSON.stringify(stats), function(err) {
        if(err) {
            return console.log(err);
        } else {
            return console.log("All Time Stats set")
        }
    });
}

const aliases = ['stat', 'allstats', 'teamstats', 'teamstat'];

module.exports = { help, response, writeStats, readStats, aliases };