var Telegraf = require("telegraf"); //@3.38
const dotenv = require('dotenv');
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply('hey',
    {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_to_message_id: ctx.message.message_id
    });
})


bot.catch((err, ctx) => {
    bot.telegram.sendMessage(1004813228, `Ooops, encountered an error for ${ctx.updateType} :`+ err)
})
bot.launch();