

module.exports.run = async (bot, message, args) => {
  function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return bot.users.get(mention);
	}
}
  const user = getUserFromMention(args[0]);
    
        weebSH.toph.getRandomImage('bang')
        .then(image => message.channel.send(`\`${message.author.tag}\` has shot \`${user.tag}\` <:blobhyperthinkfast:597125330125455383>\n`+image.url))
        .catch(err => console.error(`Oopsie, an error occurred: ${err}`));
};


module.exports.help = {
    name: 'bang',
    aliases: ['shoot']
};