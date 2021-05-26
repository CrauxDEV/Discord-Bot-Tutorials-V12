
![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)

# Discord-Bot-Tutorials-V12/Replit.com
In this tutorial I am going to teach u how to make a discord bot using discord.js in https://www.replit.com/~.
Basically you have to learn at least javascript variables.
and u should have a idea what is commenting, anyway // is the comment prefix.......


So let's get started.

First Of all let's make a project in replit.com where we will make bot.
```
Step 1 :- Go to Website (https://www.replit.com/)
Step 2 :- Click on Create New project 
Step 3 :- Select language (node.js) and Name the Project.
```
Then new window will open containing a terminal/console , code editor/IDE, an existing file named index.js

Note :- Replit.com is a public site . So if u have hacker plan just turn the project private or not having hacker plan then just follow the code and instructions ( It is compulsory to all who have having hacker plan and not having hacker plan all will follow the instructions)

# Some of the things that should be remembered by You while making bot on replit.com
1.`Token` :- If you don't know what is the use of token then read this properly, 
         So, token is used to host the bot online and it is very important.  One can control your bot using this token. So I suggest you to hide token in repl.it websites while putting or your bot token will be stole by other users on repl.it and can control your bot.

# Basic / main codes for hosting our bot online
Now open index.js file, there type the following codes.
```index.js
//here we declare client and connect the project to discord.js
const discord = require("discord.js")
const client = new discord.Client();

//now we will host the client/ bot

client.once('ready',() => {
  console.log(`logged in as ${client.user.tag}`)//here when you run the project you will see the bot tag in console 
)};

client.login("put your bot token here");
```
If you dont know how to gain token search on yt.

# Hiding our bot token
Dont put your token directly on `client.login("token");`
First we will make a private file where we will store bot token with a variable name then we will declare that variable name in index.js.

For that click on lock symbol on the left side of ur files. There just Name the variable as TOKEN and put the bot token in value and click add new secret.
Then our bot token is saved and hided to the variable named "TOKEN".
Now we will put the code to index.js and we will put that variable in client.login.
For that just follow the step;

```index.js
//just add this code to index.js just below the `const client = new discord.Client();`
const token = process.env.TOKEN;

//at last just replace client.login to `client.login(token);
```
Now run the project, and see in your test server your bot will be online .


# Start up code with explanation
Here's the same code with comments, so it's easier to understand what's going on.
```index.js
// require the discord.js module
const discord = require('discord.js');

// create a new Discord client
const client = new discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log(`logged in as ${client.user.tag}`);
});

// login to Discord with your app's token
client.login('your-token-goes-here');
```
Although it's not a lot, it's good to know what each bit of your code does. But, as it currently is, this won't do anything. You probably want to add some commands that run whenever someone sends a specific message, right? Let's get started on that, then!

# Adding Status of the bot
Now after hosting and writing the simple startup code we should head towards the status. 
For that we have 2 methods to add;

`1st Method`

```index.js
client.user.setActivity({name: "put here status here", type: "put ur type"});
```

`2nd Method`
```index.js
client.user.setPresence({activity: {name: "",type: ""},status: "idle"});
```
