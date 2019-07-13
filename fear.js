const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});


const discord = require("discord.js");
const token = require("./config.json").token;
const bot = new discord.Client();
global.prefix = require("./config.json").prefix;
const weebtoken = require("./config.json").weeb;

const Taihou = require('taihou');
global.weebSH = new Taihou(weebtoken, true, {
    userAgent: 'Fear/1.0.0'
});
require("./lib/functions")(bot);

const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5NDE4OTk4OTE0MzkwNDI2NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTYxOTkzOTMwfQ.iWwRqaKPbebYDIsfILWpfgxuMW9lbIIaEYh2cGlCKS4', { webhookPort: 5000, webhookAuth: 'password'});

// Optional events
dbl.on('posted', () => {
  console.log('Server count posted!');
});

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
});

const { ddblAPI } = require('ddblapi.js');
const ddbl = new ddblAPI("594189989143904264", "1c5f2836fe40b2457803929b8d32ebb3eccf5d4638c9065f099f0af4d0f5b077fb7b3b317d793b4cd23b44448e60e61b3574b643d882067d6da5d8105105cc55");
  setInterval (() => {
ddbl.postStats(bot.guilds.size);
  console.log("Done posting to DDBL");
}, 300000)

bot.on("guildCreate", guild => {
  let channel = bot.channels.get("595273808584114186");
  let newServer = new discord.RichEmbed()
  .setColor("#000fff")
  .setThumbnail(guild.iconURL)
  .setTitle(`New server joined: ${guild.name}`)
  .addField("Owner:", `${guild.owner.user.tag}`)
  .addField("ID:", guild.id, true)
  .addField("Users:", guild.memberCount, true)
  .addField("Channels:", guild.channels.size)
  .setTimestamp()
  .setFooter(`Thanks :) | I am now in ${bot.guilds.size} servers`);
  channel.send(newServer);
});

bot.on("guildDelete", guild => {
  let channel = bot.channels.get("595273808584114186");
  let oldServer = new discord.RichEmbed()
  .setColor("#000fff")
  .setTitle(`Server left: ${guild.name}`)
  .setThumbnail(guild.iconURL)
  .addField("Owner:", `${guild.owner.user.tag}`)
  .addField("ID:", guild.id, true)
  .addField("Users:", guild.memberCount, true)
  .addField("Channels:", guild.channels.size)
  .setTimestamp()
  .setFooter(`Aww :( | I am now in ${bot.guilds.size} servers`);
  channel.send(oldServer);
});

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.afk = new Map();

module.exports.bot = bot;

bot.login(token);


