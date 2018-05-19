const Discord = require('discord.js');

module.exports = {
	name: 'botinfo',
	description: 'Display info about yourself.',
	execute(message) {
        const embed = new Discord.RichEmbed()
		.setDiscription("Bot Information")
		.setColor("#008000")
		.addField("Bot Name", bot.user.username);
		
		message.channel.send({embed});
    },
};		