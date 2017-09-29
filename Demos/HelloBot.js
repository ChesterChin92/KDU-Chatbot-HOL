//Must have!
var builder = require('botbuilder');

//Connect to console
var connector = new builder.ConsoleConnector().listen();



//Wolla bot created.
var bot = new builder.UniversalBot(connector);

//Start conversation
bot.dialog('/',function(session){
    session.send('Hello, bot!');
});

