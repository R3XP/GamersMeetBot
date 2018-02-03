const Discord = require("discord.js");
const Bot = new Discord.Client();

Bot.on('ready', () => {
  console.log(`Logged in as ${Bot.user.tag}!`);
});



//MUST STAY:
Bot.login(process.env.BOT_TOKEN);
