module.exports.run = async (bot, message, args) => {
    let botmessage = args.join(" ");
        message.delete().catch();
        const botEmbed = {
            color: 0x00ff00,
            title: "Say:",
            description: botmessage,
            timestamp: new Date(),
            footer: {
                text: `${message.author.username}`,
                icon_url: `${message.author.displayAvatarURL}`

            },
        };
        message.channel.send({embed: botEmbed});
};


module.exports.help = {
    name: 'say',
    aliases: []
};