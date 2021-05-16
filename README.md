# Discord-Bot-Tutorials-V12
It is a short tutorials for beginners who are marking discord bot using Javascript. 

So let's get started.

First of all let's look towards our requirements.
 - Code editor ( I will recommend vscode)If you have windows 7 then follow alternative. 
 ALTERNATIVE:- You can use "replit.com" for code. And if you are using replit.com for code then u dont need other requirements. 

 - Node.js/Npm package(It is basically used when u have sublime text 3 like code editor except vscode)


Now Let's look towards our main code / index that should be written main. And by this you can host bot.
So now for that open your code editor and make a new file basically named "index.js" or "main.js", and u should remember all file should be created with ending .js, for example "index.js".

# Index.js codes 
```index

const discord = require('discord.js');

const client = new discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login('token');

```

