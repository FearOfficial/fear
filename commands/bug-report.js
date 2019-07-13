const Discord = require("discord.js");

module.exports = class purge {
    constructor(){
        this.name = 'bug-report',
        this.alias = [''],
        this.usage = "-bug-report"
    }

    run(bot, message, args){
      
      
    }   
}
module.exports.run = async (bot, message, args) => {
  let bug = args.join(" ");
  let user = message.author.username;
  let guild = message.guild.name;
  let channel = bot.channels.get("594591019132125215")
  let embed = new Discord.RichEmbed()
  .setTitle("Bug Report")
  .setThumbnail("https://cdn.discordapp.com/attachments/594370347474747412/595503779923755008/BugHunter.png")
  .addField("Bug", bug)
  .addField("Reported By", user)
  .addField("Reported in", guild)
  .setColor("#f49542")
  
  channel.send("<@!588430117122998277>");
  message.channel.send("<:TickYes:594764024864833547> **| Your bug has been reported in the official server. It will be reviewed so please be patient.**")
  channel.send(embed).then(i => i.react("⏳"));
};


module.exports.help = {
  name: 'bug-report',
  aliases: []
};