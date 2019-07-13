const Discord = require("discord.js");
const ownerid = "588430117122998277";
const inspect = require('util').inspect;
module.exports.run = async (bot, message, args) => {
    if(message.author.id == ownerid) {
        let toEval = args.join(" ");
        let evaluated = inspect(eval(toEval, { depth: 0 } ))
        try {
            if(toEval) {
                let hrStart = process.hrtime()
                let hrDiff;
                hrDiff = process.hrtime(hrStart)
                return message.channel.send(`*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ''}${hrDiff[1] / 1000000}ms.*\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })

                
            } else {
                message.channel.send("Error while evaluating: `cannot evaluate air`")
            }
        } catch(e) {
            message.channel.send(`Error while evaluating: \`${e.message}\``)
        }
    } else {
        return message.reply("Only my owner can do this >:C")
    }
};


module.exports.help = {
    name: 'eval',
    aliases: ['execute']
};