module.exports.run = async (bot, message, args) => {
    var resMsg = await message.channel.send('Ping is being calculated... :bar_chart:')
        .then(setTimeout(function(){
            resMsg.edit('Ping: ' + Math.round((resMsg.createdTimestamp - message.createdTimestamp) - bot.ping));
        }, 1500));
        console.log(`Finished a ping with a ping of: ${resMsg.createdTimestamp - message.createdTimestamp - bot.ping}`);
};


module.exports.help = {
    name: 'ping',
    aliases: []
};