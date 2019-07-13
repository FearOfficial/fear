module.exports.run = async (bot, message, args) => {
    weebSH.toph.getRandomImage('owo')
        .then(image => message.channel.send(image.url))
        .catch(err => console.error(`Oopsie, an error occurred: ${err}`));
};


module.exports.help = {
    name: 'owo',
    aliases: []
};