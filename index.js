const Discord = require('discord.js');
const client = new Discord.Client();

client.login('Nzg3MjYyNzIwMTY3OTAzMjMy.X9SZiw.ttXsiJiNB9-lYHIqS97FncQDr84');

console.log('Beep boop')
const readyDiscord = () => console.log('Ready to work');
client.once('ready', readyDiscord);

client.on('message', msg => {
  if (msg.content.includes('yo bro')){
    msg.reply('wassup homie');
    console.log(msg)
  }
})
