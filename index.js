const discord = require('discord.js');
const client = new discord.Client();
const token = process.env.TOKEN;
const prefix = process.env.PREFIX;

client.commands = new discord.Collection();
client.aliases = new discord.Collection();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login('token');
