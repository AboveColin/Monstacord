module.exports = {
	name: 'invite',
	description: 'Link to the bot for invite',
	cooldown: 5,
	execute(message, args, db) {
		message.channel.sendMessage('Here is the Monstacord invite link https://discordapp.com/oauth2/authorize?&client_id=446065295334047744&scope=bot');
	},
};