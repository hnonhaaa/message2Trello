const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  await axios.post('https://n8n.a8tech.com/webhook/951b0767-7628-4980-8607-872dddd0a2cd', {
    content: message.content,
    author: message.author.username,
    channel: message.channel.name,
  });
});
console.log('DISCORD_TOKEN:', process.env.DISCORD_TOKEN);

client.login(process.env.DISCORD_TOKEN);
