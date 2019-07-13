module.exports.run = async (bot, message, args) => {
    if (message.author.id === '588430117122998277') {
        // Code for owner goes here
        let statuses = ['-help for help', '-bug-report for reports', "Fear's Playhouse ;)"];
    // This part of the event changes the status of the bot on a timed interval
    setInterval(function() {
        // This picks a status from an array and chooses the interval depending on how many items are in the array
        let status = statuses[Math.floor(Math.random() * statuses.length)];
    
        bot.user.setPresence({
        
            // This sets the status for the bot
            game: {
                name: status
            },
            // This sets the status as online (Green dot)
            status: 'online'
        });
    }, 15000)
    message.react(":TickYes:594764024864833547")
    } else {
        message.channel.send('Only the bot owner can do this!');
    };
};


module.exports.help = {
    name: 'reset-status',
    aliases: ['rotate-status']
};