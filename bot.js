const Discord = require("discord.js");
const Bot = new Discord.Client();

Bot.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

Bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});




//MUST STAY:
Bot.login(process.env.BOT_TOKEN),
