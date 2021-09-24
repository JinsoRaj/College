const token = 'xxxx';
var telegramUrl = "https://api.telegram.org/bot" + token;
var webAppUrl = 'https://script.google.com/macros/s/xxxwww/exec';

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
var chat_id = contents.channel_post.chat.id;
//var chat_i = '1004813228';
var message_id = contents.channel_post.message_id;
var text = contents.channel_post.caption;
var cap = text + " @okdaedit";
var caption = cap.replace("undefined", " ");
//sendMessage(chat_i,text)
editMessageCaption(chat_id, message_id, caption)
}

function doGet(e){
	return HtmlService.createHtmlOutput("Hello" + JSON.stringify(e));
}