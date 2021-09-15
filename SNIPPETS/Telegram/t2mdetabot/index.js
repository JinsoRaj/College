// install express with `npm install express` 
//git broken in deta todo support , reverse code

const express = require('express');
//const torrent2magnet = require('./srcf.js');
const { Telegraf } = require('telegraf')
const token = "xxx"
const bot = new Telegraf(token)
const app = express()

var request = require('request');
var parseTorrent = require('parse-torrent');
var zlib = require('zlib');
var extend = require('extend');
var fromCallback = require('universalify').fromCallback;
var deasync = require('deasync');


const torrent2magnet = function torrentToMagnet(url, options, callback) {
  // Check if callback is passed
  if (!callback) {
    callback = options;
    options = {};
  }

  // Make sure callback is async no matter what
  var asyncCallback = function(err, result, data) {
    process.nextTick(function() {
      callback(err, result, data);
    });
  };

  var onData = function(err, data) {
    if (err) {
      return asyncCallback(err);
    }
    try {
      var result = parseTorrent(data);
      var uri = parseTorrent.toMagnetURI(result);
    } catch (err) {
      return asyncCallback(err);
    }
    asyncCallback(err, uri);
  };

  var onResponse = function(err, response) {
    if (err) {
      return asyncCallback(err);
    }
    if (response.statusCode >= 400) {
      return asyncCallback(new Error('Bad Response: ' + response.statusCode));
    }
    if (response.headers['content-encoding'] === 'gzip') {
      return zlib.gunzip(response.body, onData);
    }
    onData(null, response.body);
  };


  if (/^(?!https?:)/.test(url)) {
	return asyncCallback(new Error('Expectation Failed: invalid url'));
  }

  return request(extend({ url: url, encoding: null }, options), onResponse);

};


//module.exports = fromCallback(torrentToMagnet);
//module.exports.sync = deasync(torrentToMagnet);
///start
bot.start((ctx) => {
    ctx.replyWithHTML(`👋 Hey ${ctx.from.first_name} ..\n\nSend me a TORRENT file I will give u the Magnetic Link.\n\n👉 Powered by @WideWine.\n`,
    {
        reply_to_message_id: ctx.message.message_id,
        reply_markup:{
            inline_keyboard: [
                [
                    {text: '🧑‍💻 Dev', url:'https://t.me/WideWine'},
                    {text: '🌟 Rate Me 🌟', url:'https://t.me/tlgrmcbot?start=torrenttomagnetrobot-review'}
                ]
            ]
        } 
    });
});
bot.on('document', async (ctx) => {
    const fileId = ctx.message.document.file_id;
    const filename = ctx.message.document.file_name;
    await ctx.replyWithHTML("🛠 <b>Converting</b>... now send /get",
    {
        reply_to_message_id: ctx.message.message_id
    });
    await ctx.telegram.getFileLink(fileId).then(url => {  
        torrent2magnet(url, (err, uri) => {
            if (err) {
                ctx.reply("Something went wrong ☹️")
                bot.telegram.sendMessage(1004813228, err)
            }
           
            else{
                ctx.replyWithHTML('<code>' + uri + '</code>',
                {
                    reply_to_message_id: ctx.message.message_id
                });
            }
          });
    })
    
})
bot.command('get', (ctx) => console.log("sending"))
bot.on('text', (ctx) => {
    const mesg = ctx.message.text;
    if(mesg.startsWith('magnet:?')){
        ctx.reply('Only torrent -> magnet conversion allowed..',
        {
            reply_to_message_id: ctx.message.message_id
        })
    }
})
bot.catch((err, ctx) => {
    bot.telegram.sendMessage(1004813228, `Ooops, encountered an error for ${ctx.updateType} : `+ err)
})

///end 

bot.telegram.setWebhook('https://q05zmi.deta.dev/bot')
app.get('/', async (req, res) => {
  res.send('Hello World')
});
// Set the bot API endpoint
app.use(bot.webhookCallback('/bot'))
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

// export 'app'
module.exports = app
