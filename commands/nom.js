module.exports.run = async (bot, message, args) => {
    weebSH.toph.getRandomImage('nom')
    .then(image => message.channel.send(image.url))
    .catch(console.error)
};



module.exports.help = {
    name: 'nom',
    aliases: []
};