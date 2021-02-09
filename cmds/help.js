const Discord = require('discord.js');

const hEmbeds = new Discord.MessageEmbed()


	.setColor('RANDOM')
	.setTitle('Commands List')
	.setAuthor('Bread Bots Commands List')
	.setDescription('There are currently 5 commands readily available for use.')
	.addField('Bread', '`Generates a word from our bread picker`')
	.addField('Gif <search>', '`Generates a gif from Tenor following your inquiry`')
	.addField('Help', '`Gives you the commands list for Bread Bot`')
	.addField('Coin', '`Shows a gold doubloon coin.`')
	.addField('Note', '`Shows a banknote with some face value`')
	.addField('Start', '`This command lets you start your journey on the smallest economy in discord.`')
	.addField('Daily', '`This commands give you a certain amount of coins DAILY.`')
	.setFooter('This command is brought to you by `https://www.youtube.com/watch?v=ub82Xb1C8os`');

module.exports = function(msg, args) {
    msg.channel.send(hEmbeds)
  }; 



