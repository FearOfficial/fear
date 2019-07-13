module.exports.run = async (bot, message, args) => {
    message.channel.send("Use this bit.ly link to invite me!\nhttp://bit.ly/FearCo");
};


module.exports.help = {
    name: 'invite',
    aliases: ['inv']
};