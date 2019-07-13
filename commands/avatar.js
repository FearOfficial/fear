module.exports.run = async (bot, message, args) => {
    if (!message.mentions.users.size) {
        const mypfp = {
            color: 0x000000,
            title: "Your avatar:",
            image: {
                url: message.author.displayAvatarURL
            },
        };
        return message.channel.send({ embed: mypfp });
    }

    const avatarList = message.mentions.users.map(user => {
        const pfp = {
            color: 0x51ff00,
            title: `${user.username}'s avatar:`,
            image: {
                url: user.displayAvatarURL
            },
        };
        return message.channel.send({ embed: pfp });
    });
};


module.exports.help = {
    name: 'avatar',
    aliases: ['pfp']
};