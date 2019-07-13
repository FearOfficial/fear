const Discord = require("discord.js");

module.exports = class botinfo {
    constructor(){
        this.name = "botinfo",
        this.alias = ['specs'],
        this.usage = "-botinfo"
    }
    
    run(bot, message, args){
        
    }
}

module.exports.run = async (bot, message, args) => {

// promises style - new since version 3
  

  let cpu = Math.round(process.cpuUsage().system)
  let cpupercent = Math.round((cpu * 1) / 1000) / 10;

  let ram = Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 10) / 10;
  let rampercent = Math.round((ram / 512) * 1000) / 10;
  var startTime  = process.hrtime()
  var startUsage = process.cpuUsage()

    let createdAtRaw = bot.user.createdAt.toDateString();
    let createdAt = createdAtRaw.split(" ");
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#000000")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.tag, true)
    .addField("Servers", bot.guilds.size, true)
    .addField("Users", bot.users.size)
    .addField("Memory Used", `${rampercent}%`, true)
    .addField("CPU Used", `${cpupercent}%`, true)
    .addField("Created On", `${createdAt[0]} ${createdAt[1]} ${createdAt[2]} ${createdAt[3]}`)
    .addField("Uptime", "https://status.fearboat.tk");

        return message.channel.send(botembed);
};


module.exports.help = {
    name: 'botinfo',
    aliases: ['specs']
};