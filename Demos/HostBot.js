var builder = require('botbuilder');
var restify = require('restify');

// var connector = new builder.ConsoleConnector().listen();
var connector = new builder.ChatConnector();

var bot = new builder.UniversalBot(connector);
bot.dialog('/',[
    function(session){
    builder.Prompts.text(session,'Please enter an area, I will show you some cool property!');
},
function(session,result){
    session.send('Please hold on...searching for,' + result.response);
}


]);

//Start the server and listen/

var server = restify.createServer();
server.listen(process.env.port||process.env.PORT||3978,function(){
    console.log('%s listening to %s',server.name,server.url);
});
server.post('/api/messages',connector.listen());