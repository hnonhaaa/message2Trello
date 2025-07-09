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
client.login("MTM5MDE3NDgwMzIyMjA3MzQzNw.GXtxar.awapgaD_SOCs__xtjOJsfhNYvDhD1v0S5pEEV4");
