const Discord = require("discord.js");
const ownerID = "588430117122998277";

module.exports.run = async (bot, message, args) => {
    if(!message.author.id == ownerID) return message.reply("Only my owner can make announcements using me >:C")

    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()
    if(mChannel) {
        argsresult = args.join(" ").slice(21);
        const succEm = new Discord.RichEmbed()
        .setTitle(`Announcement by: ${message.author.tag}`)
        .setColor("#000fff")
        .setDescription(argsresult)
        .setTimestamp();
        mChannel.send("@everyone")
        mChannel.send(succEm);
    } else {
        argsresult = args.join(" ")
        const elseEm = new Discord.RichEmbed()
        .setTitle(`Announcement by: ${message.author.tag}`)
        .setColor("#000fff")
        .setDescription(argsresult)
        .setTimestamp();
        message.channel.send(elseEm);
    }
};


module.exports.help = {
    name: 'announce',
    aliases: []
};