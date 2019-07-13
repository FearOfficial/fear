const {bot} = require('../fear.js');
const config = require("../config.json");

// mongoose.connect('mongodb://localhost:27018/money', {
//     useNewUrlParser: true }, (err) =>{
//         if (err) return console.log(err);
//         console.log('Connected to MONGODB for coin system !');

//    });


bot.on("ready", async () => {
    const { post } = require('snekfetch')
    const DBL_TOKEN = "1856ff899b70785cd8758815afea59bc9df7850343b0a754acf7755f1d4d0897";
    const updateBotList = async () => {
        console.log('Updating DBL stats')

        const { body: reply } = await post(`https://discordbotlist.com/api/bots/${bot.user.id}/stats`)
            .set("Authorization", `Bot ${DBL_TOKEN}`)
            .send({
                shard_id: 0,
                guilds: bot.guilds.size,
                users: bot.users.size,
                voice_connections: bot.voiceConnections.size
            })

        return (reply)
    }

const responseFromAPI = await updateBotList()
    console.log(`${bot.user.username} is ready for action!`);
    if (config.activity.streaming == true) {
        bot.user.setActivity(config.activity.game, {
            url: 'https://twitch.tv/username'
        });
    } else {
        bot.user.setActivity(config.activity.game, {
            type: 'LISTENING'
        }); //PLAYING, LISTENING, WATCHING
        bot.user.setStatus('dnd'); // dnd, idle, online, invisible
    }
});