
const Fs = require("fs");
const Discord = require('discord.js');


module.exports = function(msg, args) {
    var args = msg.content.substr().toLowerCase().split(" "); {
        var userJSON = JSON.parse(Fs.readFileSync("./database/users.json"))
        var userJSONresult = Math.floor((Math.random() * 100) + 1);
        userJSON[msg.author.id].bal += userJSONresult;
        userJSON[msg.author.id].gross += userJSONresult;
        

        Fs.writeFileSync("./database/users.json", JSON.stringify(userJSON));
        
    const hEmbeds = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`Here's some money, ${msg.author.username}.`)
    .setAuthor(`Economy`)
    .setDescription(`<:pixilframe03:807169305455755315> ${userJSONresult} has been added to your balance!`)
    .setFooter('This command is brought to you by `https://www.youtube.com/watch?v=ub82Xb1C8os`');

    msg.channel.send(hEmbeds);

    return;
    };
}; 


//we have been editing the wrong file
//put his file back together and edit balance.js tommorow