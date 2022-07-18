const { GatewayIntentBits, Client, Collection } = require("discord.js")

const config = require("./Config.json")

const client = new Client({ intents: [ 
GatewayIntentBits.Guilds, 
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent, 
GatewayIntentBits.GuildMembers,  
GatewayIntentBits.GuildVoiceStates, 
       ] });

module.exports = client;

client.slashCommands = new Collection();

require("./Handler")(client);

client.login(config.BotToken);
