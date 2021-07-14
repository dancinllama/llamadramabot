const config = require('../config.js');

const help = '!land alerts the stream about a possible landing location within Fortnite.  Suggest a specific location with !land <location>';

//Update this manually as the seasons change. Might create an API CLI utility to auto-update/move this to a config instead.
const land_locations = ["CORAL CASTLE","CATTY CORNER","CORNY COMPLEX","CRAGGY CLIFFS","DIRTY DOCKS","HOLLY HATCHERY","LAZY LAKE","MISTY MEADOWS","STEALTHY STRONGHOLD","PLEASANT PARK","SLURPY SWAMP","BONEY BURBS","BELIEVER BEACH","WEEPING WOODS","WEIRD ALIEN AREA","SKI LODGE"];

const response = (client, username, suggestedSpot, stats) => {
    if(suggestedSpot){
        client.say(config.CHANNEL, `@${username} suggests the crew land at ${suggestedSpot}`);
        return;
    }
    let spot = land_locations[Math.floor(Math.random()*land_locations.length)];
    client.say(config.CHANNEL, `@${username}, Hi!  That looks like a request for a random land location. My satellites have huddled together and recommend ${spot}.`);
}

const aliases = ['where','location'];

module.exports = { response, aliases, help };