const emojiAware = require('emoji-aware');
var Telegraf = require("telegraf");
var token = "kikikihmm";
const bot = new Telegraf(token);
const languageRegEx = /[^\x00-\x7F!—ı@#₹$£€¥%^&*“”�‚ƒ„…†‡()_+\-±¡：•°İ`´~©®×÷=\[\]{};':’‘"\\|,.<>\/?¿💂🏼‍♀️]+/i;

async function checkMsg(ctx, messageText){ 

    var msgText = messageText;
    msgText = msgText.replace(/\n/g, " ");
    const messageClean = emojiAware.withoutEmoji(msgText).filter(str => /\S/.test(str)).join('');
    const badLanguageFound = languageRegEx.test(messageClean);
    var user = await ctx.telegram.getChatMember(ctx.message.chat.id, ctx.message.from.id)
    if(badLanguageFound && (user.status != "creator" && user.status != "administrator" && ctx.message.from.username != "GroupAnonymousBot")){
        try{
            //await bot.telegram.forwardMessage(1004813228, ctx.message.chat.id, ctx.message.message_id);
            await ctx.deleteMessage();
        }
        catch (e){
            console.log(`hmm: ${e}`)
        }
        
    }
    
}


bot.start((ctx) => {

    bot.telegram.sendMessage(ctx.chat.id, "Hi.. I will allow only English Language in groups.\n\nBY @WideWine",
    {
      parse_mode: 'Markdown',
      disable_web_page_preview: true,
      reply_to_message_id: ctx.message.message_id 
    });
});

bot.on('text', async(ctx) => {
    var messageText = ctx.message.text;
    checkMsg(ctx, messageText);

})

bot.on(["audio","document","photo","video","voice"], async(ctx) =>{

    if(ctx.message.caption){
        var messageText = ctx.message.caption;
        checkMsg(ctx, messageText);
    }
})

bot.on("new_chat_members", async(ctx) => {
    ctx.message.new_chat_members.forEach(async element => {
        if (element.id === ctx.botInfo.id) {
            await bot.telegram.sendMessage(1004813228, `Bot added to ${ctx.message.chat.id} => ${ctx.message.chat.title} => @${ctx.message.chat.username || ctx.message.chat.type}`);
        }
    });
})

bot.catch((err, ctx) => {
    bot.telegram.sendMessage(1004813228, `Ooops, encountered an error for ${ctx.updateType}`+ err)
  })

bot.launch();

// dependencies": {
//     "emoji-aware": "^3.0.5",
//     "telegraf": "^3.38.0"
//   }