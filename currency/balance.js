
const Fs = require("fs");
const Discord = require('discord.js');


module.exports = function(msg, args) {
        
    var args = msg.content.substr().toLowerCase().split(" "); {
        var userJSON = JSON.parse(Fs.readFileSync("./database/users.json"))
        var userJSONresult = userJSON[msg.author.id]
        .bal;
        var userJSONresult1 = userJSON[msg.author.id]
        .gross;
        var userJSONresult2 = userJSON[msg.author.id]
        .vault;

        userJSONresult1 = userJSONresult + userJSONresult2;

        Fs.writeFileSync("./database/users.json", JSON.stringify(userJSON));
        
    const hEmbeds = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`Balance of ${msg.author.username}.`)
    .setAuthor(`Economy`)
    .addField(`Balance:`, `<:pixilframe03:807169305455755315> ${userJSONresult}`)
    .addField(`Vault:`, `<:pixilframe03:807169305455755315> ${userJSONresult2}`)
    .addField(`Gross Total:`, `<:pixilframe03:807169305455755315> ${userJSONresult1}`)
    .setFooter('This command is brought to you by `https://www.youtube.com/watch?v=ub82Xb1C8os`');

    msg.channel.send(hEmbeds);

    return;
    };
}; 