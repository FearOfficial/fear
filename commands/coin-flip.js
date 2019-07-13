const Discord = require('discord.js');

module.exports = class coin {
    constructor(){
        this.name = 'coin-flip',
        this.alias = ['coin', 'coinflip'],
        this.usage = "-coin-flip"
    }

    run(bot, message, args){
        
        }
    }


module.exports.run = async (bot, message, args) => {
    var resultflip = Math.floor((Math.random() * 2) + 1);
        if (resultflip == 1) {
            const embedheads = new Discord.RichEmbed()
            .setTitle("Coinflip")
            .setColor("#000000")
            .setDescription(`The coin landed on heads!`);
            message.channel.send(embedheads);
            } else if (resultflip == 2) {
                const embedtails = new Discord.RichEmbed()
                .setTitle("Coinflip")
                .setColor("#000000")
                .setDescription(`The coin landed on tails!`);
                message.channel.send(embedtails);
            }
};


module.exports.help = {
    name: 'coin-flip',
    aliases: ['coin', 'coinflip']
};