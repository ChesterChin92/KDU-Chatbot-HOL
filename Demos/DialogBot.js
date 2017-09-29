var builder = require('botbuilder');

var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector);
//Imagine writing an essay, use comma. :-)
bot.dialog('/',[
    function(session){
    builder.Prompts.text(session,'Please enter an area, I will show you some cool property!');
},
function(session,result){
    session.send('Please hold on...searching for,' + result.response);
}

]); //Take note one the ] 

