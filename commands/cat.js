module.exports.run = async (bot, message, args) => {
    weebSH.toph.getRandomImage('animal_cat')
    .then(image => message.channel.send("🐱 Meow!~\n" + image.url))
    .catch(console.error)
};



module.exports.help = {
    name: 'cat',
    aliases: ['meow']
};