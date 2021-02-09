
const Fs = require("fs");
const Discord = require('discord.js');


module.exports = function(msg, args) {
    var args = msg.content.substr().toLowerCase().split(" "); {
        var userJSON = JSON.parse(Fs.readFileSync("./database/users.json"))
        userJSON[msg.author.id].bal += 10;
        userJSON[msg.author.id].gross += 10;
    Fs.writeFileSync("./database/users.json", JSON.stringify(userJSON));

    const hEmbeds = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${msg.author.username}, you have now claimed your daily!`)
    .setAuthor(`Economy`)
    .setDescription("<:pixilframe03:807169305455755315> `10` has been added to your balance!")
    .setFooter('This command is brought to you by `https://www.youtube.com/watch?v=ub82Xb1C8os`');

    msg.channel.send(hEmbeds);

    return;
    };
}; 
