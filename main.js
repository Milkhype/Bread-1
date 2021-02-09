
console.log('Bot Loading: Beezow Doo-Doo Zopitty Bop-Bop-Bop....');

require('dotenv').config();


const Fs = require("fs");
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);
const cooldowns = new Discord.Collection();
client.on('ready', readyDiscord);

function readyDiscord() {
  console.log('Executed commands succesfully: API is online');
}




const commandHandler = require('./cmds');

client.on('message', commandHandler);


/*Shift+alt+f=JSON cleaner format*/