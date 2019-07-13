const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    const helpLink = "http://www.fearboat.tk/";
    const statusLink = "https://www.status.fearboat.tk";
    const helpEm = new Discord.RichEmbed()
    .setColor("#000000")
    .setTitle("Help")
    .setThumbnail("https://cdn.discordapp.com/attachments/594370347474747412/596421259097669642/blobfingerguns.png")
    .setDescription(`You can find my commands at the website here: http://www.fearboat.tk/`)
    .addField(`Status:`, 'https://status.fearboat.tk/')
    .setFooter(`http://www.fearboat.tk/`)
    .setTimestamp();
    message.channel.send(helpEm)
    .then(message.channel.send("If you think there is a bug, simply do this:\n`-bug-report <the bug here>`!\n and a staff member will review it as soon as possible!"));
};

module.exports.help = {
    name: 'help',
    aliases: ['h']
};