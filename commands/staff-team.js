const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const Staff = new Discord.RichEmbed()
        .setTitle("Click me for staff page")
        .setColor("#ffffff")
        .setURL("http://www.fearboat.tk/staff.html");
        message.channel.send(Staff);
};


module.exports.help = {
    name: 'staff',
    aliases: []
};