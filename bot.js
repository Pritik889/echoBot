const { ActivityHandler, MessageFactory } = require("botbuilder")

class testEchoBot extends ActivityHandler {
    constructor() {
        super();
        this.onMessage(async (context, next) => {
            const responseText = `My Echo Bot:${context.activity.text}`;
            await context.sendActivity(MessageFactory.text(responseText, responseText));
            await next();
        });

        this.onMembersAdded(async (context, next) => {
            const welcomeText = 'Hello and welcome to my first chat app!';
            await context.sendActivity(MessageFactory.text(welcomeText, welcomeText));
            await next();
        })
    }

}
module.exports.testEchoBot = testEchoBot;
