const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const config = require('./config.json');

client.on('ready', () => {

client.user.setActivity('Glitch', { type: 'PLAYING' })
  console.log(`Online in Discord!! ${client.user.tag}!`);
});

client.on('message', async message => {  
if (message.author.bot) return;
if (message.channel.type === 'dm') return;
 
  let prefix = config.prefix
  let messageArray = message.content.split(' ');
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
   if (cmd === `${prefix}help`)  {
     let bicon = client.user.displayAvatarURL;
     let embed = new Discord.RichEmbed()
     .setAuthor("―――――Help Command―――――", client.user.avatarURL)
     .setColor("RANDOM")
     .setThumbnail(bicon)
     .addField("**Music Command :**", 
     `**|** _**!PLAY**_  **|**  _**!SKIP**_  **|**  _**!STOP**_  **|**  _**!PAUSE**_  **|**`)
     .addField("**Dibuat Oleh Kuro :**", client.user.createdAt)
      message.channel.send(embed)
   }
});

client.on('message', msg => {
  if (msg.content === 'Nezuko') {
    msg.reply('Halo!');
  }
});

client.login(process.env.TOKEN);
