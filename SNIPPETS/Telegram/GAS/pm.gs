const token = 'xxxxx';
var telegramUrl = 'https://api.telegram.org/bot' + token;
var bapi = "https://botapi.giuseppem99.xyz/bot" + token;
var webAppUrl = 'https://script.google.com/macros/s/xxxx/exec';

function setWebhook() {
var url = telegramUrl + "/setWebhook?url=" + webAppUrl;
var response = UrlFetchApp.fetch(url);
}
function getUpdates(){
	var response = UrlFetchApp.fetch(telegramUrl + "/getUpdates");
	Logger.log(response.getContentText());
}

function dWebhook() {
var url = telegramUrl + "/deleteWebhook?url=" + webAppUrl;
var response = UrlFetchApp.fetch(url);
}



function sendMessage(chat_i, text) {
var url = telegramUrl + '/sendMessage?chat_id=' + chat_i + '&text=' + encodeURIComponent(text) ;
var response = UrlFetchApp.fetch(url);
Logger.log(response.getContentText()); 
}

function sendlinkMessage(chat_i, text) {
var fnurl = telegramUrl + '/sendMessage';
var formData = {
  'chat_id': chat_i,
  'text': text,
  'parse_mode': 'MarkdownV2'
};
  var options = {
  'method' : 'post',
  'payload' : formData
};

  var response = UrlFetchApp.fetch(fnurl, options);
  var ret = JSON.parse(response.getContentText());
  var res = ret.result;
  //var status = res.status;
  //Logger.log(res); 
  return res; 
}

async function getChatMembers(chat_id, filter, query) {
  var fnurl = bapi + "/getChatMembers";
  //var url = telegramUrl + "/sendMessage?chat_id=" + chat_i + "&text="+ text;
  var formData = {
  'chat_id': chat_id,
  'filter': filter,
  'query': query
};
  var options = {
  'method' : 'post',
  'payload' : formData
};

  var response = UrlFetchApp.fetch(fnurl, options);
  var ret = JSON.parse(response.getContentText());
  var res = ret.result;
  //var status = res.status;
  //Logger.log(res); 
  return res;
  
  
}
async function getMessageInfo(chat_id, message_id){
  var fnurl = bapi + "/getMessageInfo";
  //var url = telegramUrl + "/sendMessage?chat_id=" + chat_i + "&text="+ text;
  var formData = {
  'chat_id': chat_id,
  'message_id': message_id
  };
  var options = {
  'method' : 'post',
  'payload' : formData
  };

  var response = UrlFetchApp.fetch(fnurl, options);
  var ret = JSON.parse(response.getContentText());
  var res = ret.result;
  //var status = res.status;
  //Logger.log(res); 
  return res;
  
  
}
async function editMessageText(chat_id, message_id, text){
  var fnurl = telegramUrl + "/editMessageText";
  //var url = telegramUrl + "/sendMessage?chat_id=" + chat_i + "&text="+ text;
  var formData = {
  'chat_id': chat_id,
  'message_id': message_id,
  'text': text
  };
  var options = {
  'method' : 'post',
  'payload' : formData
  };

  var response = UrlFetchApp.fetch(fnurl, options);
  var ret = JSON.parse(response.getContentText());
  var res = ret.result;
  //var status = res.status;
  //Logger.log(res); 
  return res;
}
async function updateDB(pass_data){
  var msgobj = await getMessageInfo(chat_id='1004813228', message_id='7');
  var txt = msgobj.text;
  var msgcontent = txt.split(" ");
  for (var i = 0; i < msgcontent.length; i++){
    if(msgcontent.indexOf(pass_data) === -1){
      msgcontent.push(pass_data);
      
      //editMessageText('1004813228', '964', pass_data)
      
      Logger.log(msgcontent);
    }
  }
  var str = msgcontent.join(' ');
  editMessageText('1004813228', '7', str)
  Logger.log(msgcontent);

}
async function forwardMessage(chat_id, from_chat_id, message_id) {
  var fnurl = telegramUrl + "/forwardMessage";
  //var url = telegramUrl + "/sendMessage?chat_id=" + chat_i + "&text="+ text;
  var formData = {
  'chat_id': chat_id,
  'from_chat_id': from_chat_id,
  'message_id': message_id
};
  var options = {
  'method' : 'post',
  'payload' : formData
};

  var response = UrlFetchApp.fetch(fnurl, options);
  var ret = JSON.parse(response.getContentText());
  var res = ret.result;
  //var status = res.status;
  //Logger.log(res); 
  return res;
  
  
}
async function tester() {
  //var tg = await getMessageInfo('1004813228', '964');
  //var msginfo = tg;
  //var jsonout = JSON.stringify(msginfo);
  //var jsn = JSON.parse(member)
  //Logger.log(jsonout); 
  sendMessage("1004813228",'1004813228'); 
}

// async function curDate(){
//   var dat = Utilities.formatDate(new Date(), "GMT+5:30", "dd/MM/yyyy");
//   sendMessage("1004813228",dat)
// }
// var today_date = Utilities.formatDate(new Date(), "GMT+5:30", "dd/MM/yyyy");
// if(today_date === '1111/02/32021'){
//   curDate()
// }
async function doPost(e) {
  
  var contents = JSON.parse(e.postData.contents);
  var chat_id = contents.message.from.id;
  var message_id = contents.message.message_id;
  if(!contents.message.text && chat_id !== 1004813228){
    forwardMessage("1004813228", JSON.stringify(chat_id), message_id);
    //sendMessage(chat_id, 'Okay. I forwarded your msg to Jinso. Wait for reply. SPAMMING == BAN');
    Utilities.sleep(1 * 1000);
    sendlinkMessage('1004813228',`[${chat_id}](tg://user?id=${chat_id})`);
  }
  
  var fname = contents.message.from.first_name;
  let input = contents.message.text;
  let inputArray = input.split(" ");
  
  let getChatMembers_no_arg = "";
  let upd_msg = "";
  //let knonly = "";
  if (inputArray.length == 1 && contents.message.text === "/start" ) {
    var startm = `Hey ${fname}, You can contact Jinso Raj through this bot. Send msg & wait for reply 😊`;
    try{
      updateDB(JSON.stringify(chat_id));
      //upd_msg = "updating DB";
      //sendMessage(chat_id,chat_id);
    }catch(Error) {
      sendMessage("1004813228", Error);
    }
    Logger.log(startm);
    sendMessage(chat_id,startm);
  }
  else if (inputArray.length == 1 && contents.message.text === "!re_set" && chat_id === 1004813228 ) {
          try{
            upd_msg = "resetting...";
            sendMessage(chat_id,upd_msg);
            editMessageText('1004813228', '7', '1004813228');
            
          }catch(Error) {
            sendMessage(chat_id, Error);
          }
  }

  else if (inputArray.length > 1 && inputArray[0] === "!up_date" && chat_id === 1004813228 ) {
    inputArray.shift();
    params = inputArray.join(" ");
    //scnd = params;
    try{
      updateDB(params);
      upd_msg = "updating DB";
      sendMessage(chat_id,upd_msg);
    }catch(Error) {
      sendMessage(chat_id, Error);
    }
    //sendMessage(chat_id,fval);
  }
  else if (chat_id === 1004813228 && inputArray.length == 1 && contents.message.reply_to_message && contents.message.text === "/broadcast" ) {
    var repmsgtxt = contents.message.reply_to_message.text; //todo copymsg()
    var db_users = await getMessageInfo(chat_id='1004813228', message_id='7');
    var users = db_users.text;
    var userids = users.split(" ");
    var errarray = [];
    for (var i = 0; i < userids.length; i++){
      try{
        sendMessage(userids[i], repmsgtxt)
        Utilities.sleep(2 * 1000);
      }catch(err){
        
        errarray.push(userids[i])

        //sendMessage(chat_id, err)
      }
    }
    //sendMessage(chat_id,repmsgtxt);
    sendMessage("1004813228", 'Tried with: ' + userids.length + ' & error with: ' + errarray.length + ':' );
  }
  else if (chat_id === 1004813228 && inputArray.length > 1 && contents.message.reply_to_message && inputArray[0] === "/send" ) {
    var target_chat_id = contents.message.reply_to_message.text; //target chat id
    inputArray.shift();
    var my_reply_msg = inputArray.join(" ");
    sendMessage(target_chat_id, my_reply_msg);
    
  }
  else {
    // forward every other TEXT messages
    
    if(chat_id !== 1004813228){
      //var startm = 'Okay. I forwarded your msg to Jinso. Wait for reply. SPAMMING == BAN';
      //sendMessage(chat_id,startm);
      forwardMessage("1004813228", JSON.stringify(chat_id), message_id);
      Utilities.sleep(1 * 1000);
      sendlinkMessage('1004813228',`[${chat_id}](tg://user?id=${chat_id})`);
    }
  }
  
  //var caption = cap.replace("undefined", " ");
  
}
function doGet(e){
	return HtmlService.createHtmlOutput("Hello" + JSON.stringify(e));
}

