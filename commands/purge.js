module.exports.run = async (bot, message, args) => {
  const cont = message.content.slice(prefix.length).split(" ");
      const ar = cont.slice(1);

      async function purge() {
        message.delete();
        
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do! You aren't somoene with enough perms to do this!");


        if(isNaN(ar[0])) {
          message.channel.send('Please post a number as your argument. \nUsage: ' + prefix + 'purge <amount>');
        }
        
        if(message.member.hasPermission("MANAGE_MESSAGES")) {
          const fetched = await message.channel.fetchMessages({limit: ar[0]});
          console.log(fetched.size +' messages found, deleting...');
          message.channel.send(fetched.size + ' messages deleted!')
            .then(message.channel.bulkDelete(fetched))
            .catch(error => message.channel.send(`Error: ${error}`));
          
        }
        
      }

      purge();
};


module.exports.help = {
  name: 'purge',
  aliases: ['prune']
};
