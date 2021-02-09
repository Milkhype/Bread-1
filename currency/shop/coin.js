const Discord = require('discord.js');
const priceSELL = ('`Not Sellable`')
const priceBUY = ('`Currently Not Purchasable`')
const cEmbeds = new Discord.MessageEmbed()


.setColor('#ffff00')
.setTitle('Pepe Coin')
.setURL('https://www.youtube.com/watch?v=8avMLHvLwRQ')
.setDescription('This coin is used to pay your respect to the national hero of the Philippines Sir Jose Rizal. The name comes from his Nickname "Pepe".')
.setThumbnail('https://cdn.discordapp.com/emojis/807169305455755315.png?v=1')
.addField('**SELL**', priceSELL)
.addField('**BUY**', priceBUY)
.setFooter('Type: Respect Token', 'https://cdn.discordapp.com/emojis/807169305455755315.png?v=1');  

module.exports = function(msg, args) {
    msg.channel.send(cEmbeds)
  }; 


