const Discord=require('discord.js');
const Bot=new Discord.Client();

Bot.on('ready', () => {
  console.log("I am ready to du stuff, master");
});

Bot.on('message', message => {
  if(message.content == "ping") {
    message.reply("pong");
  }
});



//MUST STAY:
Bot.login(process.env.BOT_TOKEN),
