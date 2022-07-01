const Discord = require('discord.js');
const bot = new Discord.Client()
const fivereborn = require('fivereborn-query');
const config = require('./config.json')

bot.once('ready', () => { 
  console.log('ogo.sql') 
})

client.on("messageCreate", async message => {
  if (message.content == "!ping") {
      message.channel.send("pong!")
  }
})

bot.login(config.BOT_TOKEN) 