
const Fs = require("fs");
const Discord = require('discord.js');

const hEmbeds = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('You have now Joined the Economy!')
.setAuthor('Economy')
.setDescription(`please type (prefix) help to start your journey.`)




module.exports = function(msg, args) {

    var args = msg.content.substr().toLowerCase().split(""); {
        var userJSON = JSON.parse(Fs.readFileSync("./database/users.json"))
        userJSON[msg.author.id] = {
            bal:0,
            vault:0,
            gross:0,
    }
    Fs.writeFileSync("./database/users.json", JSON.stringify(userJSON));

    msg.channel.send(hEmbeds);
    return;
    };
}; 
