const Discord = require("discord.js");
const Client = require("fortnite")
const keys = require("../keys.json");
const fortnite = new Client(keys.fortnite)

module.exports.run = async (bot, message, args) => {
    let username = args[0];
    let platform = args[message.content.split(' ').slice(username.length)] || "pc";

    if(!username) return message.reply("Please provide a username");

    let data = fortnite.user(username, platform).then(data => {
        let stats = data.stats;
        let lifetime = stats.lifetime;
        let mplated = lifetime.matches;
        let wins = lifetime.wins;
        let kills = lifetime.kills;
        let kd = lifetime.kd;

        let em = new Discord.RichEmbed()
        .setTitle("Fortnite Tracker, Lifetime Stats")
        .setAuthor(data.username)
        .setColor(0x000fff)
        .addField("Wins", wins, true)
        .addField("Matches played", mplated, true)
        .addField("Kills", kills, true)
        .addField("KD", kd, true)

        message.channel.send(em);
    })
};

module.exports.help = {
    name: 'fortnite-stats',
    aliases: ['fortnite']
};