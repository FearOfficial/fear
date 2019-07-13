module.exports.run = async (bot, message, args) => {
    weebSH.toph.getRandomImage('neko')
    .then(image => message.channel.send(image.url))
    .catch(console.error)
};



module.exports.help = {
    name: 'neko',
    aliases: ['nya']
};