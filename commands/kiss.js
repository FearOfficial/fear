module.exports.run = async (bot, message, args) => {
    let member = message.mentions.members.first()
        weebSH.toph.getRandomImage('kiss')
        .then(image => message.channel.send(`${message.author} has kissed ${member} uwu\n`+image.url))
        .catch(err => console.error(`Oopsie, an error occurred: ${err}`));
};


module.exports.help = {
    name: 'kiss',
    aliases: []
};