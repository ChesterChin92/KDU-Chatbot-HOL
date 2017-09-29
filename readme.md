# Chatbot Hands On Lab
___
# Lets start coding!!

![](https://media.giphy.com/media/srbiWWa0VW2YM/giphy.gif)


### Checklist
___
* Make sure node is working
* Make sure Bot Framework Channel Emulator 
* Make sure node pakages are installed
    * bot builder
    * restify


### Windows User
___

```sh
C:\xampp\htdocs\botsFrameWork\Demos>node HelloBot.js
```

### Mac Users
___

```sh
$ node 
```
### The Skeleton Code
___

```js
var builder = require('botbuilder');

var connector = new builder.ConsoleConnector().listen();

var bot = new builder.UniversalBot(connector);

bot.dialog('/',function(session){
    session.send('Hello, bot!');
});
```



