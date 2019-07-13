const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const { stripIndents } = require('common-tags')
const weather = require("weather-js");

module.exports.run = async (bot, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result){
    if (err) message.channel.send(err);
    
    var current = result[0].current;
    var location = result[0].location;
    
    const embed = new Discord.RichEmbed()
    .setDescription(`**${current.skytext}**`)
    .setAuthor(`Weather for ${current.observationpoint}`)
    .setThumbnail(`${current.imageUrl}`)
    .setColor(0x000fff)
    .addField('Timezone', `UTC${location.timezone}`, true)
    .addField("Degree type", location.degreetype, true)
    .addField("Temperature", `${current.temperature} Degrees`, true)
    .addField("Feels Like", `${current.feelslike} Degrees`, true)
    .addField("Winds", current.winddisplay, true)
    .addField("Humidity", `${current.humidity}%`, true)
    message.channel.send(embed);
  })
};

module.exports.help = {
    name: 'weather',
    aliases: []
};