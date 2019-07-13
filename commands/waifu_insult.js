module.exports.run = async (bot, message, args) => {
    let member = message.mentions.members.first()
        weebSH.toph.getRandomImage('waifu_insult')
        .then(image => message.channel.send(`${message.author} has insulted ${member}'s waifu OwO\n`+image.url))
        .catch(err => console.error(`Oopsie, an error occurred: ${err}`));
};

module.exports.help = {
    name: 'waifuinsult',
    aliases: ['waifu-insult']
};