module.exports.run = async (bot, message, args) => {
    weebSH.toph.getRandomImage('cry')
    .then(image => message.channel.send("😢 *crying noises*\n" + image.url))
    .catch(console.error)
};



module.exports.help = {
    name: 'cry',
    aliases: ['sad']
};