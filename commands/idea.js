const config = require('../config.js');
const { writeStats } = require('./stats.js');

let goodideas = 0;
let badideas = 0;
let idea_username;
let current_stats;
let idea_cooldown;
let current_client;

const help = 'Use !idea good, !idea bad, !goodidea, or !badidea to cast your vote.  Votes take 10 seconds.  To view the crew\'s history of good and bad ideas, use the !idea history command.';

//so the goal here was to give the audience the chance if the squad is doing a good idea or a bad one.
//it's almost always a bad idea so this was more of an exercise in a timed vote than functionality people use.
const startIdeaCooldown = () => {
    idea_cooldown = true;
    setTimeout(function() {
        try{
            idea_cooldown = false;
            let result = goodideas > badideas ? 'good' : 'bad';
            current_client.say(config.CHANNEL, `@${idea_username}, @Hi! With a vote of ${goodideas} to ${badideas}, it looks like this is a ${result} idea.  Good luck, crew!`);

            if(current_stats && result === 'good'){
                current_stats.goodideas++;
            }else if(current_stats && result === 'bad'){
                current_stats.badideas++;
            }

            writeStats(current_stats);

            goodideas = 0;
            badideas = 0;
        }catch(e){
            console.log(e);
        }
    }, 10000);
}

const response = (client, username, idea, stats) => {

    console.log('in response...');

    if(idea === 'history'){
        client.say(config.CHANNEL, `@${username}, @Hi! Historically, the crew has had ${stats.goodideas} good ideas and ${stats.badideas} bad ideas. To vote for a good or bad idea use !goodidea, !badidea, !idea good, or !idea bad`);
        return;
    }

    if(goodideas === 0 && badideas === 0 && !idea_cooldown){
        current_stats = stats;
        idea_username = username;
        current_client = client;

        //"Likeliness" that the idea / vote that just started is a good one.
        let likelyOutcome = (Math.random() > 0.7) ? 'good' : 'bad';
        client.say(config.CHANNEL,`@${username}, Hi!  I have calculated all the odds and this is probably a ${likelyOutcome} idea.`);
        idea_cooldown = true;
        startIdeaCooldown();
    }

    if(idea === 'good'){
        goodideas++;
    }else{
        badideas++;
    }
}

module.exports = { response, help };