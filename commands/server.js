module.exports = {
	name: 'server',
	description: 'Display info about this server.',
	execute(message, args, db) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nDate Created: ${message.guild.createdAt}`);
	},
};
