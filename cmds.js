const gif = require('./cmds/gif.js');
const bread = require('./cmds/bread.js');
const help = require('./cmds/help.js');
const coin = require('./currency/shop/coin.js');
const note = require('./currency/shop/note.js');
const start = require('./currency/start.js');
const daily = require('./currency/daily.js');
const gib = require('./currency/gib.js');
const bal = require('./currency/balance.js');
const restart = require('./currency/restart.js');
const ping = require('./cmds/ping.js');

const prefix = [ '#', 'br', 'bread', '<@767558534074204191>', '<@!767558534074204191>', ];

const commandName = { help, bread, gif, coin, note, start, daily, gib, bal, restart, ping };



module.exports = async function(msg) {
    let tokens = msg.content.split(' ');
    let command = tokens.shift();
    if (command.charAt(0) == prefix) {
      command = command.substring(1);
      commandName[command](msg, tokens);
    }
};
