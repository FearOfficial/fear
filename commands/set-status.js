module.exports.run = async (bot, message, args) => {
    if (message.author.id === '588430117122998277') {
        // Code for owner goes here
        let status = args.join(" ").slice(7);
        bot.user.setActivity(status);
        message.react(":TickYes:594764024864833547")
    } else {
        message.channel.send('Only the bot owner can do this!');
    };
};


module.exports.help = {
    name: 'status',
    aliases: []
};