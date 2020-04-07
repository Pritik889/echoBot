const restify = require('restify');
const { BotFrameworkAdapter } = require('botbuilder');
const { testEchoBot } = require('./bot');



const server = restify.createServer();
server.listen(3978, () => {
    console.log(`\n${server.name} listening to ${server.url}`);
    console.log('\nGet Bot Framework Emulator: https://aka.ms/botframework-emulator');
    console.log('\nTo talk to your bot, open the emulator select "Open Bot"');
});

const adapter = new BotFrameworkAdapter();
const bot = new testEchoBot();

server.post('/api/myMessage', (req, res) => {
    adapter.processActivity(req, res, async (context) => {
        await bot.run(context);
    });
});