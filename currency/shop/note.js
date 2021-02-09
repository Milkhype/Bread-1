const Discord = require('discord.js');
const priceSELL = ('<:pixilframe03:807169305455755315> `85`')
const priceBUY = ('<:pixilframe03:807169305455755315> `100`')
const cEmbeds = new Discord.MessageEmbed()

.setColor('#ffff00')
.setTitle('Pepe Note')
.setURL('https://www.youtube.com/watch?v=8avMLHvLwRQ')
.setDescription(`A denotable banknote or type of negotiable promissory note, made by a bank, payable to the bearer on demand. Can be changed into <:pixilframe03:807169305455755315> 100 Pepe Coins.`)
.setThumbnail('https://cdn.discordapp.com/attachments/775927113949118478/807543086589804554/Pepe_Banknote_HD.jpg')
.addField('**SELL**', priceSELL)
.addField('**BUY**', priceBUY)
.setFooter('Type: Currency Note', 'https://cdn.discordapp.com/attachments/775927113949118478/807543086589804554/Pepe_Banknote_HD.jpg');  

module.exports = function(msg, args) {
    msg.channel.send(cEmbeds)
}; 

//pretty easy