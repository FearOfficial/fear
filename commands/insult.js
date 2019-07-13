

module.exports.run = async (bot, message, args) => {
    let member = message.mentions.members.first()
        weebSH.toph.getRandomImage('insult')
        .then(image => message.channel.send(`${message.author} has insulted ${member} o.o\n`+image.url))
        .catch(err => console.error(`Oopsie, an error occurred: ${err}`));
};


module.exports.help = {
    name: 'insult',
    aliases: []
};