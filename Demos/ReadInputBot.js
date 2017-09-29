var builder = require('botbuilder');

var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector);


bot.dialog('/',function(session){
    
    var userMessage = session.message.text;
    session.send('you said:' + userMessage);
});