const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login('token');
