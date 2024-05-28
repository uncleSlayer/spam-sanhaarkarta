import { token } from './config.json'
import { Client, Events, GatewayIntentBits } from 'discord.js'
import { getGroqChatCompletion } from './groq/utils/getReply';
import { RULES } from './groq/rules';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on('messageCreate', async message => {

    if (message.author.bot) return;


    const reply = await getGroqChatCompletion(RULES + '\n' + message.content);

    if (reply == 'true') {
        message.reply('Banning you bro')
        const resp = await message.member?.ban()
        message.reply('Marrr saale ban kar diya bhaaakk ab.')
    }

}
)

client.login(token);