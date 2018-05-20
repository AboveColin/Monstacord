const Discord = require('discord.js');

module.exports = {
	name: 'botinfo',
	description: 'Display info about yourself.',
	execute(message) {
		const exampleEmbed = new Discord.RichEmbed()
	    .setColor('#0099ff')
	    .setTitle('Monstacord')
	    .setURL('https://discord.gg/jjw8n82')
	    .setAuthor('Monsta-Madness', 'https://cdn.discordapp.com/avatars/236856961478557696/e4755472dcea6b2edc70194713487faa.png?size=2048', 'https://cdn.discordapp.com/attachments/446131041447575590/447152580452155393/200px-Ashachu.png')
	    .setDescription('Check out all the info here')
	    .setThumbnail('https://cdn.discordapp.com/avatars/236856961478557696/e4755472dcea6b2edc70194713487faa.png?size=2048')
	    .addField('Information', 'This bot is for Discord and Pokemon alike. Todays best bot around is Pokecord until Monstacord was released. We plan on a release in early August. More info coming soon!')
	    .addBlankField()
	    .setTimestamp()
	    .setFooter('You can always DM ༒TᴀͪsͤʜᴋᴇᴛᴄʜͬᴜͤᴍͣL ™༒ if you would like to help with this project.', 'https://cdn.discordapp.com/avatars/236856961478557696/e4755472dcea6b2edc70194713487faa.png?size=2048');

	    message.channel.send({ embed: exampleEmbed });
    },
};	
