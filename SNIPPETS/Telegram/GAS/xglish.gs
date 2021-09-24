const token = 'xxx';
var telegramUrl = "https://api.telegram.org/bot" + token;
var webAppUrl = 'https://script.google.com/macros/s/xxx/exec';

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
var url = telegramUrl + "/sendMessage?chat_id=" + chat_i + "&text="+ text;
var response = UrlFetchApp.fetch(url);
Logger.log(response.getContentText()); 
}

function editMessageCaption(chat_id, message_id, caption) {
//var message_id = 200;
var url = telegramUrl + "/editMessageCaption?chat_id=" + chat_id + "&message_id=" + message_id + "&caption="+ caption;
var response = UrlFetchApp.fetch(url);
Logger.log(response.getContentText()); 
}


function doPost(e) {
var contents = JSON.parse(e.postData.contents);
var chat_id = contents.message.from.id;
let input = contents.message.text;
let inputArray = input.split(" ");

let mlonly = "";
let hionly = "";
let knonly = "";
if (inputArray.length == 1 && contents.message.text === "/ml" ) {
        mlonly = "Please type malayalam words after /ml";
        sendMessage(chat_id,mlonly);
    }
else if (inputArray.length > 1 && inputArray[0] === "/ml" ) {
  inputArray.shift();
  params = inputArray.join(" ");
  //scnd = params;
  var response = UrlFetchApp.fetch("itsmairenkiturl" + params);
  var jobj = JSON.parse(response);
  var fval = jobj[0].output;
  sendMessage(chat_id,fval);
  }
else if (inputArray.length == 1 && contents.message.text === "/hi" ) {
        hionly = "Please type hindi words after /hi";
        sendMessage(chat_id,hionly);
    }
else if (inputArray.length > 1 && inputArray[0] === "/hi" ) {
  inputArray.shift();
  params = inputArray.join(" ");
  //scnd = params;
  var response = UrlFetchApp.fetch("itsmairenkiturl" + params);
  var jobj = JSON.parse(response);
  var fval = jobj[1].output;
  sendMessage(chat_id,fval);
  }
else if (inputArray.length == 1 && contents.message.text === "/kn" ) {
        knonly = "Please type kannada words after /kn";
        sendMessage(chat_id,knonly);
    }
else if (inputArray.length > 1 && inputArray[0] === "/kn" ) {
  inputArray.shift();
  params = inputArray.join(" ");
  //scnd = params;
  var response = UrlFetchApp.fetch("itsmairenkiturl" + params);
  var jobj = JSON.parse(response);
  var fval = jobj[2].output;
  sendMessage(chat_id,fval);
  }
else {
  var startm = "Hi I am Xglish Bot."
            + "I will transliterate Malayalam, Hindi, Kannada to Manglish, Hinglish, Kanglish.                                                                       USAGE:     /ml മലയാളം വാക്കുകൾ     /hi हिन्दी शब्दों     /kn ಕನ್ನಡ ಪದಗಳು                                                                          By: @JinsoRaj Credits: @SubinS2000";
  sendMessage(chat_id,startm);
  }
//var startm = "Hi.. I am X-glish Bot.I will transliterate Malayalam, Hindi, Kannada to => Manglish, Hinglish, Kanglish 😄";
//var helpm = "helped";

//var cap = text + " @usernaaaame";
//var caption = cap.replace("undefined", " ");
/*if (contents.message.text === "/start"){
  sendMessage(chat_id,startm);
  }*/
/*else {
  sendMessage(chat_id,fval);
}*/
//editMessageCaption(chat_id, message_id, caption)
}

function doGet(e){
	return HtmlService.createHtmlOutput("Hello" + JSON.stringify(e));
}