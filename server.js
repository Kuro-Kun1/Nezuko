const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Online In Discord! ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Nezuko') {
    msg.reply('Halo!');
  }
});

client.login('process.env.TOKEN');
