const config = require('../config.js');
const { writeStats } = require('./stats.js');
const StreamLabsAPI = require('streamlabs');

//Configuring the StreamLabs NPM for sending alerts through the user's streamlabs / obs stream.
const streamlabs = new StreamLabsAPI({
    clientId: process.env.STREAMLABS_CLIENT_ID,
    clientSecret: process.env.STREAMLABS_CLIENT_SECRET,
    redirectUrl: process.env.STREAMLABS_REDIRECT_URI,
    scopes: 'alerts.create'
});
let credentials = streamlabs.credentials();
credentials.access_token = process.env.STREAMLABS_TOKEN;
credentials.accessToken = process.env.STREAMLABS_TOKEN;
streamlabs.credentials(credentials);

//console.log(streamlabs.authorizationUrl());
//streamlabs.connect(process.env.STREAMLABS_CODE);

const help = '!fire alerts the stream that a fire broke out in Fortnite and is spreading across the battlefield.';

let todayfires = 0;

const response = (client, username, participant, stats) => {
    const { donation } = streamlabs.alerts.types;

    streamlabs.alerts.create({
        type: donation, // follow, subscription, donation or host.
        message: 'Fire on Athena!',
        user_message: 'A fire has broken out and is spreading across the island of Athena!',
        image_href : 'https://i.ytimg.com/vi/0lIbuQeQzDA/maxresdefault.jpg',
        sound_href : 'http://www.mp3clock.com/soundeffects/fire.wav'
      });
    
    stats.fires++;
    todayfires++;
    client.say(config.CHANNEL, `@${username}, Hi!  Looks like the crew set something on fire.  Probably @Slychika. According to the audience, the crew has exploded or set ${todayfires} thing(s) on fire today, bringing the total carnage to ${stats.fires} .`);
    writeStats(stats);
}

const aliases = ['fuego','explosion','kaboom'];

module.exports = { response, help, aliases };